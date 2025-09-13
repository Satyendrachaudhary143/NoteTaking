import express from 'express';
import dotenv from 'dotenv';
import { dbConnection } from './config/db.js';
import noteRoutes from './routes/note.route.js';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ CORS setup
const corsOptions = {
  origin: [
    "http://localhost:5173",   // local dev
    "https://note-taking-xzse.vercel.app"  // deployed frontend
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
};
app.use(cors(corsOptions));
// app.options('.*', cors(corsOptions));

// ✅ Force headers for every request
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/notes", noteRoutes);

// Error handling middleware

// DB connection
dbConnection();
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// export default app;

// For Vercel deployment