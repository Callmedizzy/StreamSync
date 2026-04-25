// import Movie from "../models/Movie.js";
// import User from "../models/User.js";
import { getActiveSubscription } from "../utils/subscriptionUtils.js";

export const listMovies = async (req, res, next) => {
  try {
    const { q, genre } = req.query;
    const filter = { isActive: true };

    if (q) {
      filter.title = { $regex: q, $options: "i" };
    }

    if (genre) {
      filter.genres = { $in: [genre] };
    }

    const movies = await Movie.find(filter).sort({ createdAt: -1 });
    return res.json({ count: movies.length, movies });
  } catch (error) {
    return next(error);
  }
};

export const getMovieById = async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.movieId);
    if (!movie || !movie.isActive) {
      return res.status(404).json({ message: "Film tidak ditemukan." });
    }
    return res.json({ movie });
  } catch (error) {
    return next(error);
  }
};

export const streamMovie = async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.movieId);
    if (!movie || !movie.isActive) {
      return res.status(404).json({ message: "Film tidak ditemukan." });
    }

    const activeSubscription = await getActiveSubscription(req.user.userId);
    if (!activeSubscription) {
      return res.status(403).json({
        code: "SUBSCRIPTION_REQUIRED",
        message: "Langganan aktif dibutuhkan untuk menonton konten.",
      });
    }

    await User.findByIdAndUpdate(req.user.userId, {
      $push: {
        watchHistory: {
          movie: movie._id,
          watchedAt: new Date(),
        },
      },
    });

    return res.json({
      stream: {
        movieId: movie._id,
        title: movie.title,
        videoUrl: movie.videoUrl,
        durationMinutes: movie.durationMinutes,
        hasEducationalContent: movie.hasEducationalContent,
        hasInteractiveStory: movie.hasInteractiveStory,
      },
      subscription: {
        planName: activeSubscription.plan.name,
        expiresAt: activeSubscription.expiresAt,
      },
    });
  } catch (error) {
    return next(error);
  }
};

