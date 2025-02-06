import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

interface AuthRequest extends Request {
  user?: string | JwtPayload | undefined;
}

export const authenticateToken = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authentication")?.split(" ")[1];

  if (!token) {
    res.status(401).json({ message: "دسترسی غیرمجاز" });
    return;
  }

  jwt.verify(token, process.env.SECRET_KEY as string, (err, user) => {
    if (err) {
      res.status(403).json({ message: "توکن نامعتبر است" });
    }

    req.user = user;
    next();
  });
};
