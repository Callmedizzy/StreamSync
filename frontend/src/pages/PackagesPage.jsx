import { useEffect, useState } from "react";

import api from "../api/client";

const PackagesPage = () => {
  const [plans, setPlans] = useState([]);
  const [subscription, setSubscription] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const loadData = async () => {
    setLoading(true);
    setError("");
    try {
      const [plansResponse, subscriptionResponse] = await Promise.all([
        api.get("/packages"),
        api.get("/packages/me/subscription"),
      ]);

      setPlans(plansResponse.data.plans || []);
      setSubscription(subscriptionResponse.data.subscription || null);
    } catch (requestError) {
      setError(requestError.response?.data?.message || "Gagal memuat paket.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const onBuyPackage = async (planId) => {
    setMessage("");
    setError("");
    try {
      const response = await api.post("/packages/purchase", {
        planId,
        paymentMethod: "simulated-ewallet",
      });
      setMessage(response.data.message || "Pembelian berhasil.");
      await loadData();
    } catch (requestError) {
      setError(requestError.response?.data?.message || "Pembelian gagal.");
    }
  };

  if (loading) {
    return <div className="page-message">Memuat paket langganan...</div>;
  }

  return (
    <section>
      <h1>Paket Hemat Mingguan</h1>

      {subscription ? (
        <div className="feature-panel">
          <h3>Langganan Aktif</h3>
          <p>
            Paket: <strong>{subscription.plan?.name}</strong>
          </p>
          <p>Berlaku hingga: {new Date(subscription.expiresAt).toLocaleString("id-ID")}</p>
        </div>
      ) : (
        <div className="feature-panel">
          <p>Belum ada langganan aktif.</p>
        </div>
      )}

      {message ? <div className="alert success">{message}</div> : null}
      {error ? <div className="alert error">{error}</div> : null}

      <div className="plan-grid">
        {plans.map((plan) => (
          <article className="plan-card" key={plan._id}>
            <h3>{plan.name}</h3>
            <p className="price">Rp {plan.price.toLocaleString("id-ID")}</p>
            <p>Durasi: {plan.durationDays} hari</p>
            <ul>
              {(plan.features || []).map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <button type="button" onClick={() => onBuyPackage(plan._id)}>
              Beli Paket
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PackagesPage;

