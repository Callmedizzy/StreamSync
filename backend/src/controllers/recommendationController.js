import Movie from "../models/Movie.js";
import User from "../models/User.js";
import { generateRecommendations } from "../services/recommendationService.js";

export const getPersonalRecommendations = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.userId).populate(
      "watchHistory.movie",
    );

    if (!user) {
      return res.status(404).json({ message: "User tidak ditemukan." });
    }

    const movies = await Movie.find({ isActive: true }).sort({ createdAt: -1 });
    const recommendations = generateRecommendations({ user, movies });

    return res.json({
      source: "mock-ai-genre-scoring",
      recommendations,
    });
  } catch (error) {
    return next(error);
  }
};

