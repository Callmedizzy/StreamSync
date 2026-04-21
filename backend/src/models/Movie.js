import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    genres: {
      type: [String],
      default: [],
    },
    durationMinutes: {
      type: Number,
      required: true,
    },
    videoUrl: {
      type: String,
      required: true,
      trim: true,
    },
    thumbnailUrl: {
      type: String,
      trim: true,
      default: "",
    },
    hasEducationalContent: {
      type: Boolean,
      default: false,
    },
    hasInteractiveStory: {
      type: Boolean,
      default: false,
    },
    communityTags: {
      type: [String],
      default: [],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;

