import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import api from "../api/client";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchMovies = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await api.get("/movies");
      setMovies(response.data.movies || []);
    } catch (requestError) {
      setError(requestError.response?.data?.message || "Gagal memuat film.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const filteredMovies = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) {
      return movies;
    }
    return movies.filter((movie) =>
      `${movie.title} ${(movie.genres || []).join(" ")}`.toLowerCase().includes(query),
    );
  }, [search, movies]);

  return (
    <section>
      <div className="section-head">
        <h1>Katalog Film & Series</h1>
        <input
          className="search-input"
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Cari judul atau genre..."
        />
      </div>

      {error ? <div className="alert error">{error}</div> : null}
      {loading ? <div className="page-message">Memuat katalog...</div> : null}

      {!loading && filteredMovies.length === 0 ? (
        <div className="page-message">Film tidak ditemukan.</div>
      ) : null}

      <div className="movie-grid">
        {filteredMovies.map((movie) => (
          <article className="movie-card" key={movie._id}>
            <img
              src={movie.thumbnailUrl || "https://placehold.co/600x340?text=StreamSync"}
              alt={movie.title}
              onError={(event) => {
                event.currentTarget.src = "https://placehold.co/600x340?text=StreamSync";
              }}
            />
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <p className="muted">{movie.description}</p>
              <p className="tags">
                {(movie.genres || []).map((genre) => (
                  <span key={genre}>{genre}</span>
                ))}
              </p>
              <div className="card-actions">
                <Link to={`/stream/${movie._id}`}>Tonton</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HomePage;

