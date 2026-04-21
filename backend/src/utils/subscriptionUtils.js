import Subscription from "../models/Subscription.js";

export const getActiveSubscription = async (userId) => {
  const now = new Date();
  return Subscription.findOne({
    user: userId,
    status: "active",
    paymentStatus: "success",
    expiresAt: { $gt: now },
  })
    .populate("plan")
    .sort({ expiresAt: -1 });
};

