import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookiePARSER from "cookie-parser";
import http from "http";
import compression from "compression";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./Routers/auth.js";

dotenv.config();
const app = express();
app.use(
  cors({
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(cookiePARSER());
app.use(compression());

// Connect to MongoDB
const connectDb = async () => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://simrami1:mrami1902@cluster0.a4bqotb.mongodb.net/?retryWrites=true&w=majority"
      )
      .then(() => {
        console.log("MongoDB connected!");
      });
  } catch (error) {
    console.error("error connection in db ", error);
  }
};

const PORT = process.env.PORT || 4000;

const server = http.createServer(app);

// Routes
app.use("/api/auth", authRouter);

// server rouning
server.listen(PORT, () => {
  connectDb();
  console.log(`Server running on port ${PORT}`);
});
