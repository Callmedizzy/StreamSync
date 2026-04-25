import jwt from "jsonwebtoken";

// import User from "../models/User.js";

const createToken = (userId) =>
  jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "7d" });

const normalizeGenres = (inputGenres) => {
  if (Array.isArray(inputGenres)) {
    return inputGenres.map((genre) => genre.trim()).filter(Boolean);
  }
  if (typeof inputGenres === "string") {
    return inputGenres
      .split(",")
      .map((genre) => genre.trim())
      .filter(Boolean);
  }
  return [];
};

export const register = async (req, res, next) => {
  try {
    const { name, email, password, preferredGenres } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Name, email, dan password wajib diisi." });
    }

    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(409).json({ message: "Email sudah terdaftar." });
    }

    const user = await User.create({
      name,
      email: email.toLowerCase(),
      password,
      preferredGenres: normalizeGenres(preferredGenres),
    });

    return res.status(201).json({
      message: "Registrasi berhasil.",
      token: createToken(user._id),
      user: user.toJSON(),
    });
  } catch (error) {
    return next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email dan password wajib." });
    }

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(401).json({ message: "Email atau password salah." });
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Email atau password salah." });
    }

    return res.json({
      message: "Login berhasil.",
      token: createToken(user._id),
      user: user.toJSON(),
    });
  } catch (error) {
    return next(error);
  }
};

export const me = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({ message: "User tidak ditemukan." });
    }
    return res.json({ user: user.toJSON() });
  } catch (error) {
    return next(error);
  }
};

