import express from "express";
import dotenv from "dotenv";
import { dbConnection } from "./config/db.js";
import noteRoutes from "./routes/note.route.js";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: ['https://note-taking-xzse.vercel.app','http://localhost:5173'],
  credentials: true
}));


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/notes", noteRoutes);

app.get("/", (req,res) => res.send("API is running..."));

// DB connection
dbConnection();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
