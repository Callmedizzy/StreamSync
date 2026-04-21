import "dotenv/config";

import { connectDB } from "../config/db.js";
import { ensureDefaultData } from "./defaultData.js";

const seed = async () => {
  try {
    await connectDB();
    await ensureDefaultData();
    console.log("Seed completed.");
    process.exit(0);
  } catch (error) {
    console.error("Seed failed:", error);
    process.exit(1);
  }
};

seed();

