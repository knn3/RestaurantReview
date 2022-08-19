require("dotenv").config;
const express = require("express");

const app = express();

// GET all Restaurants
app.get("/api/v1/restaurants", (req, res) => {
    res.status(200).json({
        status: "succes",
        data: {
            restaurant: ["Zubu", "Wendys"]
        }
    });
});

const port = process.env.PORT || 3005;
app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`);
});