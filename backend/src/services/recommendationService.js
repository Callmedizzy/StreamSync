const SCORE_WEIGHT = {
  preferredGenre: 3,
  watchedGenre: 2,
  alreadyWatchedPenalty: 1.5,
  neutralBoost: 0.5,
};

export const generateRecommendations = ({ user, movies }) => {
  const genreScoreMap = new Map();
  const watchedMovieIds = new Set();

  (user.preferredGenres || []).forEach((genre) => {
    const key = genre.toLowerCase();
    genreScoreMap.set(
      key,
      (genreScoreMap.get(key) || 0) + SCORE_WEIGHT.preferredGenre,
    );
  });

  (user.watchHistory || []).forEach((entry) => {
    if (!entry.movie) {
      return;
    }
    watchedMovieIds.add(entry.movie._id.toString());
    (entry.movie.genres || []).forEach((genre) => {
      const key = genre.toLowerCase();
      genreScoreMap.set(
        key,
        (genreScoreMap.get(key) || 0) + SCORE_WEIGHT.watchedGenre,
      );
    });
  });

  const scoredMovies = movies.map((movie) => {
    let score = 0;

    (movie.genres || []).forEach((genre) => {
      score += genreScoreMap.get(genre.toLowerCase()) || 0;
    });

    if (score === 0) {
      score += SCORE_WEIGHT.neutralBoost;
    }

    const isWatched = watchedMovieIds.has(movie._id.toString());
    if (isWatched) {
      score -= SCORE_WEIGHT.alreadyWatchedPenalty;
    }

    const reason =
      score <= SCORE_WEIGHT.neutralBoost
        ? "Dipilih untuk eksplorasi genre baru."
        : `Cocok dengan preferensi genre: ${(movie.genres || []).join(", ")}.`;

    return {
      ...movie.toObject(),
      recommendationScore: Number(score.toFixed(2)),
      reason,
    };
  });

  return scoredMovies
    .sort((a, b) => b.recommendationScore - a.recommendationScore)
    .slice(0, 10);
};

