import express from "express";
import { createUser } from "../controllers/auth.js";

const authRouter = express.Router();

authRouter.post("/signup", createUser);

export default authRouter;
