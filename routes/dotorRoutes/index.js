import express from "express";

const router = express.Router();
// express.Router()is the function used insted of app ,here routes are created seperte folder so use tis function

router.post("/signup", (req, res) => {
  res.status(201).json({ message: "signup successful" });
});

router.post("/login", (req, res) => {
  res.status(201).json({ message: "login successful" });
});


export default router;
