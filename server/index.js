import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnection } from "./config/db.js";
import noteRoutes from "./routes/note.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Define allowed origins
const allowedOrigins = [
  'https://note-taking-xzse.vercel.app',
  'http://localhost:5173'
];

// ✅ CORS middleware with dynamic origin check
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));

// ✅ Handle preflight OPTIONS requests globally
app.use((req, res, next) => {
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.sendStatus(200);
  } else {
    next();
  }
});

// ✅ Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Routes
app.use("/api/v1/notes", noteRoutes);
app.get("/", (req, res) => res.send("API is running..."));

// ✅ DB connection
dbConnection();

// ✅ Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
