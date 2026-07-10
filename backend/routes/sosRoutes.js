const express = require("express");

const router = express.Router();

// Temporary SOS storage
let sosHistory = [];

// Trigger SOS
router.post("/trigger", (req, res) => {
  const { user, location } = req.body;

  const sos = {
    id: sosHistory.length + 1,
    user: user || "Anonymous",
    location: location || "Unknown Location",
    status: "Emergency Alert Sent",
    time: new Date().toLocaleString(),
  };

  sosHistory.push(sos);

  res.status(200).json({
    success: true,
    message: "🚨 SOS Triggered Successfully",
    data: sos,
  });
});

// View SOS History
router.get("/history", (req, res) => {
  res.json({
    success: true,
    totalAlerts: sosHistory.length,
    data: sosHistory,
  });
});

module.exports = router;