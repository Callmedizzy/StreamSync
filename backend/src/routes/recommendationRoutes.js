import { Router } from "express";

import { getPersonalRecommendations } from "../controllers/recommendationController.js";
import { authRequired } from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/me", authRequired, getPersonalRecommendations);

export default router;

