const express = require("express");

const router = express.Router();

// Demo Safe Route API
router.post("/", (req, res) => {

    const { source, destination } = req.body;

    res.json({
        success: true,
        source,
        destination,
        safestRoute: "Route A (Main Road)",
        distance: "4.5 km",
        estimatedTime: "12 mins",
        safetyScore: 95,
        message: "This is the safest available route."
    });

});

module.exports = router;