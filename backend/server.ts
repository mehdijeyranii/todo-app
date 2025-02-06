import express from "express";
import cors from "cors";
import { config } from "dotenv";
import authRoutes from "./routes/auth.routes";
import connectDB from "./config/db";

config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
