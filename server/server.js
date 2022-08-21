require("dotenv").config;
const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(express.json());

// app.use(morgan("dev"));

// Middleware define at the top
// app.use((req, res, next) => {
//     console.log("our middleware");
//     next(); // Jump to next middleware
// });

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
    console.log(req.params);

    res.status(200).json({
        
    })
});

//CREATE a restaurant
app.post("/api/v1/restaurants", (req, res) => {
    console.log(req.body);
});

// UPDATE a restaurant

app.put("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
});

app.delete("/api/v1/restaurants/:id", (req, res) => {
    
})

const port = process.env.PORT || 3005;
app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`);
});