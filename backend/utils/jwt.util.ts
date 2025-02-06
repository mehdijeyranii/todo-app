import jwt from "jsonwebtoken";
import { config } from "../config/config";

export const generateToken = (userId: string): string => {
  return jwt.sign({ id: userId }, config.jwtSecret, { expiresIn: "7d" });
};

export const verifyToken = (token: string): any => {
  return jwt.verify(token, config.jwtSecret);
};
