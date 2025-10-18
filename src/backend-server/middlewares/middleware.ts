import jwt from "jsonwebtoken";
import User from "../models/Users.ts";
import Traffic from "../models/Traffic.ts";
import type { Request, Response, NextFunction } from "express";
import geoip from "geoip-lite";

export const Protected = async (req: any, res: any, next: any) => {
  try {
    const authHeader = req.headers["authorization"];
    console.log("🔎 Raw header:", authHeader); // <--- debug
    // ✅ Get token from request headers, not from frontend import

    const token = req.headers.authorization?.split(" ")[1];
    console.log("🔎 Extracted token:", token); // <--- debug

    if (!token) {
      res.status(401).json({ message: "No token provided" });
      return;
    }

    // ✅ Verify the JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      id: string;
    };
    console.log("✅ Decoded payload:", decoded); // <--- debug

    // ✅ Fetch user from DB
    const user = await User.findById(decoded.id).select(
      "firstname lastname email role status"
    );
    console.log("User from DB:", user);

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    if (user.status === "Inactive") {
      res
        .status(403)
        .json({ message: "Account is inactive. Please contact support" });
      return;
    }

    // ✅ Attach user to request
    req.user = user;

    next();
  } catch (err) {
    console.error("JWT verification error:", err);
    res.status(401).json({ message: "Invalid or expired Token" });
  }
};

export const isAdmin = async (req: any, res: any, next: any) => {
  if (req.user?.role !== "admin")
    return res.status(403).json({ message: "Admin Access Only" });
  next(); // MUST call next() if user is admin
};

export const logTraffic = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const ip: string = req.ip || req.connection.remoteAddress || "0.0.0.0";

    //Check if this IP has been logged in the last 10 minutes
    const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);

    const exists = await Traffic.findOne({
      ip,
      createdAt: { $gte: tenMinutesAgo }, // only consider recent entries
    });

    if (exists) {
      // Already logged recently, skip creating a new record
      console.log(`IP ${ip} already logged in last 10 minutes`);
    } else {
      // Device detection
      const userAgent = req.headers["user-agent"] || "";
      let device = "desktop";
      if (/mobile/i.test(userAgent)) device = "mobile";
      if (/tablet/i.test(userAgent)) device = "tablet";

      // Source detection
      const referrer = req.headers["referer"] || "Direct";
      let source = "Direct";
      if (referrer.includes("google")) source = "Google";
      if (referrer.includes("instagram")) source = "Instagram";
      if (referrer.includes("facebook")) source = "Facebook";

      // Location detection
      const geo = geoip.lookup(ip);
      const country = geo?.country || "Nigeria";
      const state = geo?.region || "Lagos";
      const city = geo?.city || "Lagos";

      // Save to DB
      await Traffic.create({ ip, device, source, country, state });
      console.log(`Logged new traffic for IP ${ip}`);
    }
    next();
  } catch (err) {
    console.error("Error logging traffic:", err);
    next(err); //
  }
};
