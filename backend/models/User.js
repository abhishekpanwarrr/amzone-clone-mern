import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      max: 100,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    phone: {
      type: String,
      min: 10,
      max: 10,
    },
    picturePath: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", UserSchema);
export default User;
