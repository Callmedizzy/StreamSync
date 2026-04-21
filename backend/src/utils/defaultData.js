import Movie from "../models/Movie.js";
import PackagePlan from "../models/PackagePlan.js";
import Poll from "../models/Poll.js";
import User from "../models/User.js";

const defaultMovies = [
  {
    title: "Big Buck Bunny",
    description:
      "Animasi ringan untuk demo streaming. Cocok sebagai konten edukasi produksi CGI.",
    genres: ["Animation", "Comedy", "Family"],
    durationMinutes: 10,
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    thumbnailUrl: "https://i.ytimg.com/vi/aqz-KE-bpKQ/maxresdefault.jpg",
    hasEducationalContent: true,
    hasInteractiveStory: false,
    communityTags: ["belajar-film", "komunitas-jakarta"],
  },
  {
    title: "Elephant Dream",
    description:
      "Film open movie pertama Blender Foundation. Nuansa sci-fi surreal.",
    genres: ["Sci-Fi", "Drama"],
    durationMinutes: 11,
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbnailUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
    hasEducationalContent: true,
    hasInteractiveStory: true,
    communityTags: ["sineas-lokal", "diskusi-plot"],
  },
  {
    title: "For Bigger Fun",
    description: "Konten singkat komedi untuk watch party cepat.",
    genres: ["Comedy", "Short"],
    durationMinutes: 1,
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    thumbnailUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg",
    hasEducationalContent: false,
    hasInteractiveStory: false,
    communityTags: ["watch-party", "komunitas-bandung"],
  },
  {
    title: "For Bigger Escape",
    description: "Konten aksi ringan dengan pace cepat.",
    genres: ["Action", "Adventure"],
    durationMinutes: 1,
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscape.mp4",
    thumbnailUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg",
    hasEducationalContent: false,
    hasInteractiveStory: true,
    communityTags: ["komunitas-surabaya", "interaktif"],
  },
];

const defaultPlans = [
  {
    name: "Paket Hemat Mingguan Basic",
    price: 35000,
    durationDays: 7,
    features: [
      "Akses film & series HD",
      "Watch Party hingga 5 user",
      "Polling film komunitas",
    ],
  },
  {
    name: "Paket Hemat Mingguan Plus",
    price: 55000,
    durationDays: 7,
    features: [
      "Akses semua konten + konten edukasi",
      "Watch Party hingga 15 user",
      "Download offline",
    ],
  },
];

export const ensureDefaultData = async () => {
  const moviesCount = await Movie.countDocuments();
  if (moviesCount === 0) {
    await Movie.insertMany(defaultMovies);
  }

  const plansCount = await PackagePlan.countDocuments();
  if (plansCount === 0) {
    await PackagePlan.insertMany(defaultPlans);
  }

  let admin = await User.findOne({ email: "admin@streamsync.local" });
  if (!admin) {
    admin = await User.create({
      name: "StreamSync Admin",
      email: "admin@streamsync.local",
      password: "Admin123!",
      role: "admin",
      preferredGenres: ["Drama", "Sci-Fi"],
    });
  }

  const pollsCount = await Poll.countDocuments();
  if (pollsCount === 0) {
    const movies = await Movie.find().limit(3);
    if (movies.length >= 2) {
      await Poll.create({
        question: "Film mana yang jadi jadwal watch party komunitas minggu ini?",
        options: movies.map((movie) => ({
          movie: movie._id,
          label: movie.title,
        })),
        createdBy: admin._id,
      });
    }
  }
};

