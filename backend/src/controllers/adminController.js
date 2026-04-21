import Movie from "../models/Movie.js";
import Poll from "../models/Poll.js";
import Subscription from "../models/Subscription.js";
import User from "../models/User.js";

export const getSystemSummary = async (req, res, next) => {
  try {
    const [totalUsers, totalMovies, activeSubscriptions, totalPolls] =
      await Promise.all([
        User.countDocuments(),
        Movie.countDocuments({ isActive: true }),
        Subscription.countDocuments({
          status: "active",
          paymentStatus: "success",
          expiresAt: { $gt: new Date() },
        }),
        Poll.countDocuments(),
      ]);

    return res.json({
      totalUsers,
      totalMovies,
      activeSubscriptions,
      totalPolls,
    });
  } catch (error) {
    return next(error);
  }
};

export const listUsers = async (req, res, next) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    return res.json({ count: users.length, users });
  } catch (error) {
    return next(error);
  }
};

export const listPayments = async (req, res, next) => {
  try {
    const payments = await Subscription.find()
      .populate("user", "name email")
      .populate("plan", "name price durationDays")
      .sort({ createdAt: -1 });
    return res.json({ count: payments.length, payments });
  } catch (error) {
    return next(error);
  }
};

export const createMovie = async (req, res, next) => {
  try {
    const movie = await Movie.create(req.body);
    return res.status(201).json({ message: "Film berhasil ditambahkan.", movie });
  } catch (error) {
    return next(error);
  }
};

export const updateMovie = async (req, res, next) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.movieId, req.body, {
      new: true,
      runValidators: true,
    });
    if (!movie) {
      return res.status(404).json({ message: "Film tidak ditemukan." });
    }
    return res.json({ message: "Film berhasil diperbarui.", movie });
  } catch (error) {
    return next(error);
  }
};

export const deleteMovie = async (req, res, next) => {
  try {
    const movie = await Movie.findByIdAndUpdate(
      req.params.movieId,
      { isActive: false },
      { new: true },
    );
    if (!movie) {
      return res.status(404).json({ message: "Film tidak ditemukan." });
    }
    return res.json({ message: "Film dinonaktifkan.", movie });
  } catch (error) {
    return next(error);
  }
};

export const updateRecommendationConfig = async (req, res) =>
  res.json({
    message:
      "Konfigurasi rekomendasi tersimpan (mock). Saat ini AI menggunakan pembobotan genre statis.",
    config: req.body,
  });

