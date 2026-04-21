import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

import { getSocketUrl } from "../api/client";
import { useAuth } from "../contexts/AuthContext";

const defaultVideo =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

const WatchPartyPage = () => {
  const { user } = useAuth();
  const socketRef = useRef(null);
  const videoRef = useRef(null);
  const ignoreSyncRef = useRef(false);

  const [roomIdInput, setRoomIdInput] = useState("room-101");
  const [joinedRoom, setJoinedRoom] = useState("");
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [events, setEvents] = useState([]);

  const addEvent = (text) => {
    setEvents((prev) => [
      { text, timestamp: new Date().toLocaleTimeString("id-ID") },
      ...prev.slice(0, 9),
    ]);
  };

  useEffect(() => {
    const socket = io(getSocketUrl(), { transports: ["websocket"] });
    socketRef.current = socket;

    socket.on("connect", () => {
      addEvent(`Terhubung ke server realtime (${socket.id}).`);
    });

    socket.on("party-user-joined", (payload) => {
      addEvent(`${payload.username} bergabung di room.`);
    });

    socket.on("party-user-left", (payload) => {
      addEvent(`${payload.username} keluar dari room.`);
    });

    socket.on("party-sync", (payload) => {
      const video = videoRef.current;
      if (!video) {
        return;
      }

      ignoreSyncRef.current = true;

      if (typeof payload.currentTime === "number") {
        const diff = Math.abs(video.currentTime - payload.currentTime);
        if (diff > 0.7) {
          video.currentTime = payload.currentTime;
        }
      }

      if (payload.action === "play") {
        video.play().catch(() => {});
      }

      if (payload.action === "pause") {
        video.pause();
      }

      if (payload.action === "seek" && typeof payload.currentTime === "number") {
        video.currentTime = payload.currentTime;
      }

      setTimeout(() => {
        ignoreSyncRef.current = false;
      }, 200);
    });

    socket.on("party-chat", (payload) => {
      setChatMessages((prev) => [...prev, payload]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const joinParty = () => {
    const roomId = roomIdInput.trim();
    if (!roomId || !socketRef.current) {
      return;
    }

    socketRef.current.emit("join-party", {
      roomId,
      username: user?.name || "Guest",
    });
    setJoinedRoom(roomId);
    addEvent(`Masuk ke room: ${roomId}`);
  };

  const leaveParty = () => {
    if (!joinedRoom || !socketRef.current) {
      return;
    }
    socketRef.current.emit("leave-party", { roomId: joinedRoom });
    addEvent(`Keluar dari room: ${joinedRoom}`);
    setJoinedRoom("");
  };

  const emitSync = (action) => {
    if (!joinedRoom || !socketRef.current || ignoreSyncRef.current) {
      return;
    }

    socketRef.current.emit("party-sync", {
      roomId: joinedRoom,
      action,
      currentTime: videoRef.current?.currentTime || 0,
    });
  };

  const sendMessage = () => {
    const message = chatInput.trim();
    if (!message || !joinedRoom || !socketRef.current) {
      return;
    }

    socketRef.current.emit("party-chat", {
      roomId: joinedRoom,
      username: user?.name || "Guest",
      message,
    });
    setChatInput("");
  };

  return (
    <section className="watch-party-page">
      <div className="section-head">
        <h1>Watch Party Real-time</h1>
      </div>

      <div className="watch-party-controls">
        <input
          type="text"
          value={roomIdInput}
          onChange={(event) => setRoomIdInput(event.target.value)}
          placeholder="Masukkan kode room"
        />
        <button type="button" onClick={joinParty}>
          Join Room
        </button>
        <button type="button" onClick={leaveParty} disabled={!joinedRoom}>
          Leave Room
        </button>
        <span className="muted">Room aktif: {joinedRoom || "-"}</span>
      </div>

      <video
        ref={videoRef}
        className="video-player"
        controls
        src={defaultVideo}
        onPlay={() => emitSync("play")}
        onPause={() => emitSync("pause")}
        onSeeked={() => emitSync("seek")}
      />

      <div className="watch-party-grid">
        <div className="feature-panel">
          <h3>Chat Room</h3>
          <div className="chat-box">
            {chatMessages.length === 0 ? (
              <p className="muted">Belum ada chat.</p>
            ) : (
              chatMessages.map((message, index) => (
                <p key={`${message.timestamp}-${index}`}>
                  <strong>{message.username}:</strong> {message.message}
                </p>
              ))
            )}
          </div>
          <div className="inline-form">
            <input
              type="text"
              value={chatInput}
              onChange={(event) => setChatInput(event.target.value)}
              placeholder="Kirim pesan..."
            />
            <button type="button" onClick={sendMessage}>
              Kirim
            </button>
          </div>
        </div>

        <div className="feature-panel">
          <h3>Aktivitas Room</h3>
          <ul className="event-list">
            {events.map((event, index) => (
              <li key={`${event.timestamp}-${index}`}>
                [{event.timestamp}] {event.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WatchPartyPage;

