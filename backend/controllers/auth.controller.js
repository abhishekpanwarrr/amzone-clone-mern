import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(409).json({ msg: "Email already in use", status: 409 });
    }
    // Hash the password before saving it to database
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const newUser = new User({
      fullName,
      email,
      password: passwordHash,
    });
    const savedUser = await newUser.save();
    res
      .status(201)
      .json({ status: 201, msg: "User created successfully", savedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ status: 400, msg: "User does not exist" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ status: 400, msg: "Invalid credentials" });
    }
    const userWithoutPassword = { ...user._doc };
    delete userWithoutPassword.password;
    const token = jwt.sign(
      { id: user?._id, email: user?.email, fullName: user?.fullName },
      process.env.JWT_SECRET
    );

    res.status(200).json({ status: 200, token, userWithoutPassword });
  } catch (error) {
    console.log("Error>>>", error);
    res.status(500).json({ error: error.message });
  }
};

export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const { email, fullName, phone } = req.body;
    const user = await User.findOne({ _id: id });
    if (!user) {
      res.status(403).json({ mg: "User not found" });
    }
    await User.updateOne({ _id: id }, { $set: { email, fullName, phone } });
    const updatedUser = await User.findOne({ _id: id });
    res.status(200).json({ msg: "User updated successfully", updatedUser });
  } catch (error) {
    console.log("Error>>>", error);
    res.status(500).json({ error: error.message });
  }
};
