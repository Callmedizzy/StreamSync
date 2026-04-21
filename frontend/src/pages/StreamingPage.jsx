import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import api from "../api/client";

const StreamingPage = () => {
  const { movieId } = useParams();
  const [streamData, setStreamData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [subscriptionRequired, setSubscriptionRequired] = useState(false);

  useEffect(() => {
    const loadStream = async () => {
      setLoading(true);
      setError("");
      setSubscriptionRequired(false);
      try {
        const response = await api.get(`/movies/${movieId}/stream`);
        setStreamData(response.data);
      } catch (requestError) {
        const code = requestError.response?.data?.code;
        if (code === "SUBSCRIPTION_REQUIRED") {
          setSubscriptionRequired(true);
          setError(requestError.response?.data?.message || "Subscription diperlukan.");
        } else {
          setError(requestError.response?.data?.message || "Gagal memuat stream.");
        }
      } finally {
        setLoading(false);
      }
    };

    loadStream();
  }, [movieId]);

  if (loading) {
    return <div className="page-message">Menyiapkan stream...</div>;
  }

  if (subscriptionRequired) {
    return (
      <section className="feature-panel">
        <h1>Langganan Diperlukan</h1>
        <p>{error}</p>
        <Link className="button-link" to="/packages">
          Beli Paket Hemat Mingguan
        </Link>
      </section>
    );
  }

  if (error || !streamData) {
    return <div className="alert error">{error || "Data stream tidak tersedia."}</div>;
  }

  const { stream, subscription } = streamData;

  return (
    <section className="stream-page">
      <h1>{stream.title}</h1>
      <p className="muted">
        Paket aktif: <strong>{subscription.planName}</strong>, berlaku sampai{" "}
        {new Date(subscription.expiresAt).toLocaleString("id-ID")}.
      </p>

      <video className="video-player" controls src={stream.videoUrl} />

      <div className="stream-notes">
        <p>Konten edukasi: {stream.hasEducationalContent ? "Tersedia" : "Tidak tersedia"}.</p>
        <p>Konten interaktif: {stream.hasInteractiveStory ? "Tersedia" : "Tidak tersedia"}.</p>
      </div>

      <Link className="button-link" to="/watch-party">
        Buka Watch Party
      </Link>
    </section>
  );
};

export default StreamingPage;

