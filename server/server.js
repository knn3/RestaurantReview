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

// GET a Restaurant
app.get("/api/v1/restaurants/:id", (req, res) => {
    console.log(req);
});

//CREATE a restaurant
app.post("/api/v1/restaurants", (req, res) => {
    
})

const port = process.env.PORT || 3005;
app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`);
});