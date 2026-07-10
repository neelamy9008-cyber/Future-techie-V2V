const express = require("express");

const router = express.Router();

// Temporary in-memory storage
let users = [];

// Register
router.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  const user = {
    id: users.length + 1,
    name,
    email,
    password,
  };

  users.push(user);

  res.status(201).json({
    message: "User Registered Successfully",
    user,
  });
});

// Login
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(401).json({
      message: "Invalid Email or Password",
    });
  }

  res.json({
    message: "Login Successful",
    user,
  });
});

// Profile
router.get("/profile", (req, res) => {
  if (users.length === 0) {
    return res.json({
      message: "No users found",
    });
  }

  res.json(users);
});

module.exports = router;