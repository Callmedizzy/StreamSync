import { Router } from "express";

import {
  getMovieById,
  listMovies,
  streamMovie,
} from "../controllers/movieController.js";
import { authRequired } from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/", listMovies);
router.get("/:movieId/stream", authRequired, streamMovie);
router.get("/:movieId", getMovieById);

export default router;

