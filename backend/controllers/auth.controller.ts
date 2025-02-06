import { Request, Response } from "express";
import User from "../models/user.model";
import jwt from "jsonwebtoken";

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      res
        .status(400)
        .json({ message: "Username, email, password are required" });
      return;
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(400).json({ message: `${email} has already been registered` });
      return;
    }

    const newUser = new User({
      username,
      email,
      password,
    });

    await newUser.save();

    res.status(201).json({ message: "Registration successful" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error in registration:", error);
      res.status(500).json({ message: "Internal server error" });
      return;
    } else {
      res.status(500).json({ message: "..." });
    }
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user || !(await user.comparePassword(password))) {
      res
        .status(400)
        .json({ message: "The email or password entered is incorrect" });
      return;
    }

    const token = jwt.sign({ id: user?._id }, "my-secret-key", {
      expiresIn: "7d",
    });
    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ message: "An error has occurred" });
  }
};
