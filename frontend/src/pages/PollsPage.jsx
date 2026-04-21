import { useEffect, useState } from "react";

import api from "../api/client";
import { useAuth } from "../contexts/AuthContext";

const PollsPage = () => {
  const { user } = useAuth();
  const [polls, setPolls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const loadPolls = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await api.get("/polls");
      setPolls(response.data.polls || []);
    } catch (requestError) {
      setError(requestError.response?.data?.message || "Gagal memuat polling.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPolls();
  }, []);

  const onVote = async (pollId, optionId) => {
    setMessage("");
    setError("");
    try {
      const response = await api.post(`/polls/${pollId}/vote`, { optionId });
      setMessage(response.data.message || "Vote tersimpan.");
      await loadPolls();
    } catch (requestError) {
      setError(requestError.response?.data?.message || "Vote gagal.");
    }
  };

  if (loading) {
    return <div className="page-message">Memuat polling film...</div>;
  }

  return (
    <section>
      <h1>Polling Film Komunitas</h1>
      {message ? <div className="alert success">{message}</div> : null}
      {error ? <div className="alert error">{error}</div> : null}

      <div className="poll-list">
        {polls.map((poll) => {
          const hasVoted = (poll.options || []).some((option) =>
            (option.voters || []).some((voterId) => String(voterId) === user?._id),
          );

          return (
            <article className="feature-panel" key={poll._id}>
              <h3>{poll.question}</h3>
              <p className="muted">Status: {poll.status}</p>
              <div className="poll-options">
                {poll.options.map((option) => (
                  <div key={option._id} className="poll-option">
                    <div>
                      <strong>{option.label}</strong>
                      <p className="muted">Votes: {option.votes}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onVote(poll._id, option._id)}
                      disabled={hasVoted || poll.status !== "active"}
                    >
                      Vote
                    </button>
                  </div>
                ))}
              </div>
              {hasVoted ? <p className="muted">Kamu sudah vote di polling ini.</p> : null}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default PollsPage;
