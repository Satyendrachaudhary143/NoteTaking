import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnection } from "./config/db.js";
import noteRoutes from "./routes/note.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  'https://notetaking-1-w0mg.onrender.com', // your frontend origin
  'http://localhost:5173' // optional for local dev
];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  next();
});

const cors = require('cors');

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
};

app.use(cors(corsOptions));

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
