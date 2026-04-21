import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import api from "../api/client";
import { useAuth } from "../contexts/AuthContext";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    preferredGenres: "",
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
      const response = await api.post("/auth/register", form);
      login(response.data);
      navigate("/");
    } catch (requestError) {
      setError(requestError.response?.data?.message || "Registrasi gagal.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={onSubmit}>
        <h1>Daftar StreamSync</h1>
        <p className="muted">Buat akun untuk mulai streaming.</p>

        <label htmlFor="name">Nama</label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={onChange}
          placeholder="Nama kamu"
          required
        />

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
          minLength={6}
          value={form.password}
          onChange={onChange}
          placeholder="Minimal 6 karakter"
          required
        />

        <label htmlFor="preferredGenres">Genre Favorit (pisah koma)</label>
        <input
          id="preferredGenres"
          name="preferredGenres"
          type="text"
          value={form.preferredGenres}
          onChange={onChange}
          placeholder="Drama, Sci-Fi, Comedy"
        />

        {error ? <div className="alert error">{error}</div> : null}

        <button type="submit" disabled={submitting}>
          {submitting ? "Memproses..." : "Daftar"}
        </button>

        <p className="muted small">
          Sudah punya akun? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;

