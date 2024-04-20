import mongoose from "mongoose";

const userShema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  authentication: {
    password: { type: String, required: true, select: false },
    slt: { type: String, select: false },
    sessionToken: { type: String, select: false },
  },
});

export default mongoose.model("UserShat", userShema);
