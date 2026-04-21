import Movie from "../models/Movie.js";
import Poll from "../models/Poll.js";

export const listPolls = async (req, res, next) => {
  try {
    const includeClosed = req.query.includeClosed === "true";
    const filter = includeClosed ? {} : { status: "active" };

    const polls = await Poll.find(filter)
      .populate("options.movie", "title genres thumbnailUrl")
      .sort({ createdAt: -1 });

    return res.json({ count: polls.length, polls });
  } catch (error) {
    return next(error);
  }
};

export const createPoll = async (req, res, next) => {
  try {
    const { question, movieIds } = req.body;

    if (!question || !Array.isArray(movieIds) || movieIds.length < 2) {
      return res.status(400).json({
        message: "Question dan minimal 2 movieIds wajib diisi.",
      });
    }

    const movies = await Movie.find({
      _id: { $in: movieIds },
      isActive: true,
    });

    if (movies.length < 2) {
      return res
        .status(400)
        .json({ message: "Minimal 2 film aktif harus tersedia." });
    }

    const poll = await Poll.create({
      question,
      options: movies.map((movie) => ({
        movie: movie._id,
        label: movie.title,
      })),
      createdBy: req.user.userId,
    });

    await poll.populate("options.movie", "title genres thumbnailUrl");
    return res.status(201).json({ message: "Polling dibuat.", poll });
  } catch (error) {
    return next(error);
  }
};

export const votePoll = async (req, res, next) => {
  try {
    const { optionId } = req.body;
    if (!optionId) {
      return res.status(400).json({ message: "optionId wajib diisi." });
    }

    const poll = await Poll.findById(req.params.pollId).populate(
      "options.movie",
      "title genres thumbnailUrl",
    );

    if (!poll) {
      return res.status(404).json({ message: "Polling tidak ditemukan." });
    }

    if (poll.status !== "active") {
      return res.status(400).json({ message: "Polling sudah ditutup." });
    }

    const userId = req.user.userId;
    const hasVoted = poll.options.some((option) =>
      option.voters.some((voterId) => voterId.toString() === userId),
    );

    if (hasVoted) {
      return res.status(409).json({ message: "User sudah melakukan voting." });
    }

    const selectedOption = poll.options.id(optionId);
    if (!selectedOption) {
      return res.status(404).json({ message: "Opsi polling tidak ditemukan." });
    }

    selectedOption.votes += 1;
    selectedOption.voters.push(userId);
    await poll.save();

    return res.json({ message: "Vote berhasil disimpan.", poll });
  } catch (error) {
    return next(error);
  }
};

export const closePoll = async (req, res, next) => {
  try {
    const poll = await Poll.findById(req.params.pollId).populate(
      "options.movie",
      "title genres thumbnailUrl",
    );
    if (!poll) {
      return res.status(404).json({ message: "Polling tidak ditemukan." });
    }
    poll.status = "closed";
    await poll.save();
    return res.json({ message: "Polling ditutup.", poll });
  } catch (error) {
    return next(error);
  }
};

