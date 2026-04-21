import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import api from "../api/client";
import { useAuth } from "../contexts/AuthContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const response = await api.post("/auth/login", form);
      login(response.data);
      navigate("/");
    } catch (requestError) {
      setError(requestError.response?.data?.message || "Login gagal.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={onSubmit}>
        <h1>Login StreamSync</h1>
        <p className="muted">Akses film, watch party, dan rekomendasi AI.</p>

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={onChange}
          placeholder="user@email.com"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={form.password}
          onChange={onChange}
          placeholder="******"
          required
        />

        {error ? <div className="alert error">{error}</div> : null}

        <button type="submit" disabled={submitting}>
          {submitting ? "Memproses..." : "Login"}
        </button>

        <p className="muted small">
          Belum punya akun? <Link to="/register">Daftar sekarang</Link>
        </p>
        <p className="muted small">Admin seed: admin@streamsync.local / Admin123!</p>
      </form>
    </div>
  );
};

export default LoginPage;

