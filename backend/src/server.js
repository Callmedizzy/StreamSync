import "dotenv/config";

import http from "http";
import { Server } from "socket.io";

import app from "./app.js";
import { connectDB } from "./config/db.js";
import { registerWatchPartyHandlers } from "./socket/watchPartySocket.js";
import { ensureDefaultData } from "./utils/defaultData.js";

const PORT = process.env.PORT || 5000;
const allowedOrigins = process.env.CLIENT_URL
  ? process.env.CLIENT_URL.split(",").map((origin) => origin.trim())
  : ["http://localhost:5173"];

const startServer = async () => {
  await connectDB();
  await ensureDefaultData();

  const server = http.createServer(app);

  const io = new Server(server, {
    cors: {
      origin: allowedOrigins,
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    },
  });

  registerWatchPartyHandlers(io);

  server.listen(PORT, () => {
    console.log(`StreamSync API listening on http://localhost:${PORT}`);
  });
};

startServer().catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});

