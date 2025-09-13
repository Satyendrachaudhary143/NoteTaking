import express from 'express';
import dotenv from 'dotenv';
import { dbConnection } from './config/db.js';
import noteRoutes from './routes/note.route.js';
import cors from 'cors';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
// middleware
app.use(cors({
   origin: 'http://localhost:5173', // ya production domain
  credentials: true

}))
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