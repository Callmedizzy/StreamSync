import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    plan: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PackagePlan",
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "expired", "cancelled"],
      default: "active",
    },
    paymentStatus: {
      type: String,
      enum: ["success", "failed", "pending"],
      default: "success",
    },
    paymentMethod: {
      type: String,
      default: "simulated-gateway",
    },
    paymentReference: {
      type: String,
      required: true,
    },
    purchasedAt: {
      type: Date,
      default: Date.now,
    },
    expiresAt: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

subscriptionSchema.index({ user: 1, expiresAt: -1 });

const Subscription = mongoose.model("Subscription", subscriptionSchema);

export default Subscription;

