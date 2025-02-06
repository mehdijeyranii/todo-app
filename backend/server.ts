import express from "express";
import cors from "cors";
import { config } from "./config/config";
import connectDB from "./config/db";
import authRoutes from "./routes/auth.routes";

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
