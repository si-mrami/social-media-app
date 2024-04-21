import UserShat from "../modules/users.js";
import crypto from "crypto";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// Create a new user
export const createUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    // ckeck if user exists
    const user = await UserShat.findOne({ email });
    if (user) {
      return res
        .status(409)
        .json({ status: "ERROR", message: "this email already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const newUser = new UserShat({
      username,
      email,
      authentication: {
        password: hashPassword,
        slt: crypto.randomBytes(16).toString("hex").slice(0, 16),
        sessionToken: crypto.randomBytes(32).toString("hex").slice(0, 32),
      },
    });
    if (!newUser) {
      return res
        .status(400)
        .json({ status: "ERROR", message: "User not Created!" });
    }
    await newUser.save();
    res
      .status(200)
      .json({ status: "OK", message: "User Created sucessfully!" });
  } catch (err) {
    next(err);
  }
};

// Login a user
export const loginUser = async (req, res, next) => {
  try {
    const JWT_SECRET = process.env.JWT_SECRET || "hsjhsshkwjksdkjslajdk";

    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({
        status: "ERROR",
        message: "Email and password are required",
      });
    }

    // Find the user by email
    const user = await UserShat.findOne({ email }).select(
      "+authentication.password"
    );

    if (!user) {
      return res.status(404).json({
        status: "ERROR",
        message: "User not found",
      });
    }

    const validPassword = await bcrypt.compare(
      password,
      user.authentication.password
    );

    if (!validPassword) {
      return res.status(401).json({
        status: "ERROR",
        message: "Invalid password",
      });
    }

    // Generate a JWT with a reasonable expiration time
    const token = jwt.sign({ _id: user._id, email: user.email }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({
      status: "OK",
      message: "Login successful",
      data: user,
      token: token,
    });
  } catch (err) {
    next(err);
  }
};
