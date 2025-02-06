import dotenv from "dotenv";

dotenv.config();

export const config = {
  jwtSecret: process.env.SECRET_KEY || "defaultSecretKey",
  mongoURI: process.env.MONGO_URI || "mongodb://localhost:27017/todo_DB",
  port: process.env.PORT || 5500,
};
