import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firsName: {
      type: String,
      unique: true,
      required: true,
    },
    lastName: {
      type: String,
      unique: true,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true },
);
const User = mongoose.model("user", userSchema);

export default User
