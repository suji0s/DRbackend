import express from "express";
import Doctor from "../../db/models/userSchema.js";
import bcrypt from "bcrypt";
import User from "../../db/models/userSchema.js";
import jwt from "jsonwebtoken";


const router = express.Router();
// express.Router()is the function used insted of app ,here routes are created seperte folder so use tis function

router.post("/signup", async (req, res) => {
  const body = { ...req.body };
  try {
    const user = await User.findOne({ username: body.username });
    // to check any dr registerd already in db with same name
    if (user) {
      return res.status(403).json({ message: "username already taken" });
    }
    if (body.password !== body.confirmpassword) {
      return res.status(403).json({ message: "pssword dont match" });
    }
    const hashedPassword = await bcrypt.hash(body.password, 2);
    body.password = hashedPassword;
    await User.create(body);
    return res.status(201).json({ message: "signup successful" });
  } catch (e) {
    console.log(e);
  }
});

router.post("/login", async (req, res) => {
  const body = { ...req.body };
  const user = await User.findOne({ username: body.username });
  if (!user) {
    return res.status(403).json({ message: "message or password incoreect" });
  }
  const isMatching = await bcrypt.compare(body.password, user.password);
  if (!isMatching) {
    return res.status(403).json({ message: "message or password incoreect" });
  }


  const token = jwt.sign({ role: "User", id: user._id }, process.env.USER_SECRET_KEY, {
    expiresIn: "7d",
  });

  return res.status(200).json({ message: "login successful" });
});

export default router;
