import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnection } from "./config/db.js";
import noteRoutes from "./routes/note.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// ✅ CORS
app.use(cors({
    origin: ["http://localhost:5173","https://note-taking-orpin.vercel.app"], // frontend url
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

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
