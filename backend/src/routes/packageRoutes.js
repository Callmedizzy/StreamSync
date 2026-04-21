import { Router } from "express";

import {
  getMySubscription,
  listPackagePlans,
  purchasePackage,
} from "../controllers/packageController.js";
import { authRequired } from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/", listPackagePlans);
router.post("/purchase", authRequired, purchasePackage);
router.get("/me/subscription", authRequired, getMySubscription);

export default router;

