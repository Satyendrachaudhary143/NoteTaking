import express from 'express';
import dotenv from 'dotenv';
import { dbConnection } from './config/db.js';
import noteRoutes from './routes/note.route.js';
import cors from 'cors';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
// middleware
const corsOptions = {
  origin: ['http://localhost:5173', 'https://your-frontend.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Handle preflight requests

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// routes
app.use("/api/v1/notes", noteRoutes);


app.get('/', (req, res) => {
  res.send('Hello from Express server!');
}
);
// db connection
dbConnection();
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});