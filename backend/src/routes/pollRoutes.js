import { Router } from "express";

import {
  closePoll,
  createPoll,
  listPolls,
  votePoll,
} from "../controllers/pollController.js";
import { adminOnly, authRequired } from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/", listPolls);
router.post("/", authRequired, adminOnly, createPoll);
router.post("/:pollId/vote", authRequired, votePoll);
router.patch("/:pollId/close", authRequired, adminOnly, closePoll);

export default router;

