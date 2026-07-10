const express = require("express");

const router = express.Router();

// Temporary storage
let reports = [];

// Add Report
router.post("/add", (req, res) => {
  const { location, description, severity } = req.body;

  const report = {
    id: reports.length + 1,
    location,
    description,
    severity,
    reportedAt: new Date(),
  };

  reports.push(report);

  res.status(201).json({
    message: "Report Submitted Successfully",
    report,
  });
});

// View All Reports
router.get("/", (req, res) => {
  res.json(reports);
});

module.exports = router;