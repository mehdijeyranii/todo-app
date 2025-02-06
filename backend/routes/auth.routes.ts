import express, { Router } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { config } from "dotenv";
import { login, register } from "../controllers/auth.controller";

config();

const router: Router = express.Router();

router.post("/register", register);
router.post("/login", login);

export default router;
