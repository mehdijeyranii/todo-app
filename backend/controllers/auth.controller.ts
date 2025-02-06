import { Request, Response } from "express";
import { User } from "../models/user.model";
import validator from "validator";
import { generateToken } from "../utils/jwt.util";

const loginAttempts: {
  [key: string]: { attempts: number; lastAttempt: number };
} = {};

export const registerUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { username, email, password } = req.body;

    // Validation
    if (!username || !email || !password) {
      res
        .status(400)
        .json({ message: "Username, email, and password are required" });
      return;
    }

    if (username.length < 3 || username.length > 20) {
      res
        .status(400)
        .json({ message: "Username must be between 3 and 20 characters" });
      return;
    }

    if (!validator.isEmail(email)) {
      res.status(400).json({ message: "Invalid email format" });
      return;
    }

    if (
      !validator.isStrongPassword(password, {
        minLength: 8,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      res.status(400).json({
        message:
          "Password must be strong (at least 8 characters, one uppercase letter, one number, and one special character)",
      });
      return;
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: "Email is already registered" });
      return;
    }

    const newUser = new User({ username, email, password });
    await newUser.save();

    res.status(201).json({ message: "Registration successful", user: newUser });
  } catch (error) {
    console.error("Error in registration:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ message: "Email and password are required" });
      return;
    }

    if (!validator.isEmail(email)) {
      res.status(400).json({ message: "Invalid email format" });
      return;
    }

    const currentTime = Date.now();
    if (loginAttempts[email] && loginAttempts[email].attempts >= 5) {
      const timeDiff = (currentTime - loginAttempts[email].lastAttempt) / 1000;
      if (timeDiff < 60) {
        res.status(429).json({
          message: "Too many failed attempts. Please try again later.",
        });
        return;
      }
    }

    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      loginAttempts[email] = {
        attempts: (loginAttempts[email]?.attempts || 0) + 1,
        lastAttempt: currentTime,
      };
      res.status(400).json({ message: "Invalid email or password" });
      return;
    }

    loginAttempts[email] = { attempts: 0, lastAttempt: currentTime };

    const token = generateToken(user._id as string);
    res.json({ token, user });
  } catch (error) {
    console.error("Error in login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
