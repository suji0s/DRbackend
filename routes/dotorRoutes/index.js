import express from "express";
import Doctor from "../../db/models/doctorSchema.js";
import bcrypt from "bcrypt";

const router = express.Router();
// express.Router()is the function used insted of app ,here routes are created seperte folder so use tis function

router.post("/signup", async (req, res) => {
  const body = { ...req.body };
  try {
    const doctor = await Doctor.findOne({ username: body.username });
    // to check any dr registerd already in db with same name
    if (doctor) {
      return res.status(403).json({ message: "username already taken" });
    }
    if (body.password !== body.confirmpassword) {
      return res.status(403).json({ message: "pssword dont match" });
    }
    const hashedPassword = await bcrypt.hash(body.password, 2);
    body.password = hashedPassword;
    await Doctor.create(body);
    return res.status(201).json({ message: "signup successful" });
  } catch (e) {
    console.log(e);
  }
});

router.post("/login", (req, res) => {
  return res.status(201).json({ message: "login successful" });
});

export default router;
