import { useEffect, useState } from "react";

import api from "../api/client";

const RecommendationsPage = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [source, setSource] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadRecommendations = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await api.get("/recommendations/me");
        setRecommendations(response.data.recommendations || []);
        setSource(response.data.source || "mock-ai");
      } catch (requestError) {
        setError(
          requestError.response?.data?.message || "Gagal memuat rekomendasi AI.",
        );
      } finally {
        setLoading(false);
      }
    };

    loadRecommendations();
  }, []);

  return (
    <section>
      <div className="section-head">
        <h1>Rekomendasi AI untuk Kamu</h1>
        <span className="muted">Engine: {source || "-"}</span>
      </div>

      {loading ? <div className="page-message">Menghitung rekomendasi...</div> : null}
      {error ? <div className="alert error">{error}</div> : null}

      <div className="movie-grid">
        {recommendations.map((movie) => (
          <article className="movie-card" key={movie._id}>
            <img
              src={movie.thumbnailUrl || "https://placehold.co/600x340?text=StreamSync"}
              alt={movie.title}
            />
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <p className="muted">{movie.reason}</p>
              <p>
                Score: <strong>{movie.recommendationScore}</strong>
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default RecommendationsPage;

