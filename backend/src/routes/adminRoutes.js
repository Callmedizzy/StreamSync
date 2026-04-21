import { Router } from "express";

import {
  createMovie,
  deleteMovie,
  getSystemSummary,
  listPayments,
  listUsers,
  updateMovie,
  updateRecommendationConfig,
} from "../controllers/adminController.js";
import { adminOnly, authRequired } from "../middlewares/authMiddleware.js";

const router = Router();

router.use(authRequired, adminOnly);

router.get("/summary", getSystemSummary);
router.get("/users", listUsers);
router.get("/payments", listPayments);
router.post("/movies", createMovie);
router.put("/movies/:movieId", updateMovie);
router.delete("/movies/:movieId", deleteMovie);
router.post("/recommendation/config", updateRecommendationConfig);

export default router;

