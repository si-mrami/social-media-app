import mongoose from "mongoose";

const userShema = new mongoose.Schema(
  {
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
    img: {
      type: String,
    },
    subscribers: {
      type: Number,
      default: 0,
    },
    subscribeUsers: {
      type: [String],
    },
  },
  { timestamps: true }
);

export default mongoose.model("UserShat", userShema);
