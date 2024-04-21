import express from "express";
import { createUser, loginUser } from "../controllers/auth.js";

const authRouter = express.Router();

// create a new user
authRouter.post("/signup", createUser);

// login a user
authRouter.post("/signin", loginUser);

export default authRouter;
