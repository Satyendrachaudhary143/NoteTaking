import express from "express";
import dotenv from "dotenv";
import { dbConnection } from "./config/db.js";
import noteRoutes from "./routes/note.route.js";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  "http://localhost:5173",
  "https://note-taking-xzse.vercel.app"
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log("Blocked by CORS:", origin);
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET","POST","PUT","DELETE","OPTIONS"],
  allowedHeaders: ["Content-Type","Authorization"]
};

// ✅ Apply CORS for all requests including preflight
app.use(cors(corsOptions));
app.options(".*", cors(corsOptions));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/notes", noteRoutes);

app.get("/", (req,res) => res.send("API is running..."));

// DB connection
dbConnection();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
