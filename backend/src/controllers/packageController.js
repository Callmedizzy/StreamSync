// import PackagePlan from "../models/PackagePlan.js";
// import Subscription from "../models/Subscription.js";
import { getActiveSubscription } from "../utils/subscriptionUtils.js";

export const listPackagePlans = async (req, res, next) => {
  try {
    const plans = await PackagePlan.find({ isActive: true }).sort({ price: 1 });
    return res.json({ count: plans.length, plans });
  } catch (error) {
    return next(error);
  }
};

export const getMySubscription = async (req, res, next) => {
  try {
    const subscription = await getActiveSubscription(req.user.userId);
    return res.json({ subscription });
  } catch (error) {
    return next(error);
  }
};

export const purchasePackage = async (req, res, next) => {
  try {
    const { planId, paymentMethod = "bank-transfer-virtual-account" } = req.body;

    if (!planId) {
      return res.status(400).json({ message: "planId wajib diisi." });
    }

    const plan = await PackagePlan.findById(planId);
    if (!plan || !plan.isActive) {
      return res.status(404).json({ message: "Paket tidak ditemukan." });
    }

    const existingSubscription = await getActiveSubscription(req.user.userId);
    if (existingSubscription) {
      existingSubscription.status = "expired";
      existingSubscription.expiresAt = new Date();
      await existingSubscription.save();
    }

    const purchasedAt = new Date();
    const expiresAt = new Date(purchasedAt);
    expiresAt.setDate(expiresAt.getDate() + plan.durationDays);

    const paymentReference = `PAY-${Date.now()}-${Math.floor(Math.random() * 9999)}`;

    const subscription = await Subscription.create({
      user: req.user.userId,
      plan: plan._id,
      status: "active",
      paymentStatus: "success",
      paymentMethod,
      paymentReference,
      purchasedAt,
      expiresAt,
    });

    await subscription.populate("plan");

    return res.status(201).json({
      message: "Pembelian paket berhasil (simulasi pembayaran sukses).",
      payment: {
        paymentReference,
        paymentMethod,
        amount: plan.price,
        status: "success",
      },
      subscription,
    });
  } catch (error) {
    return next(error);
  }
};

