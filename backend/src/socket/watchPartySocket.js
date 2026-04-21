export const registerWatchPartyHandlers = (io) => {
  io.on("connection", (socket) => {
    socket.on("join-party", ({ roomId, username }) => {
      if (!roomId) {
        return;
      }

      socket.join(roomId);
      socket.data.username = username || "Guest";

      socket.to(roomId).emit("party-user-joined", {
        socketId: socket.id,
        username: socket.data.username,
        timestamp: new Date().toISOString(),
      });
    });

    socket.on("party-sync", ({ roomId, action, currentTime }) => {
      if (!roomId) {
        return;
      }

      socket.to(roomId).emit("party-sync", {
        socketId: socket.id,
        action,
        currentTime,
        timestamp: new Date().toISOString(),
      });
    });

    socket.on("party-chat", ({ roomId, username, message }) => {
      if (!roomId || !message) {
        return;
      }

      io.to(roomId).emit("party-chat", {
        socketId: socket.id,
        username: username || socket.data.username || "Guest",
        message,
        timestamp: new Date().toISOString(),
      });
    });

    socket.on("leave-party", ({ roomId }) => {
      if (!roomId) {
        return;
      }

      socket.leave(roomId);
      socket.to(roomId).emit("party-user-left", {
        socketId: socket.id,
        username: socket.data.username || "Guest",
        timestamp: new Date().toISOString(),
      });
    });

    socket.on("disconnecting", () => {
      socket.rooms.forEach((roomId) => {
        if (roomId === socket.id) {
          return;
        }

        socket.to(roomId).emit("party-user-left", {
          socketId: socket.id,
          username: socket.data.username || "Guest",
          timestamp: new Date().toISOString(),
        });
      });
    });
  });
};

