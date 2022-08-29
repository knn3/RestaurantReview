require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();
const db = require("./DB/index.js");
const cors = require("cors");

app.use(cors());
app.use(express.json());

// app.use(morgan("dev"));

// Middleware define at the top
// app.use((req, res, next) => {
//     console.log("our middleware");
//     next(); // Jump to next middleware
// });

// GET all Restaurants

app.get("/api/v1/restaurants", async (req, res) => {
    try {
        const results = await db.query("SELECT * FROM restaurants");
        res.status(200).json({
            status: "succes",
            results: results.rows.length,
            data: {
                restaurants: results.rows,
            },
        });
    }
    catch (err) {
        console.log(err);
    }
});

// GET a Restaurant

app.get("/api/v1/restaurants/:id", async (req, res) => {
    try {
        const id = req.params.id;
        
        // Parameterize query prevent us from being attacked, injection, etc..
        const restaurant = await db.query("SELECT * FROM restaurants WHERE id = $1", [
            id,
        ]);
        
        // get all reviews that have the restaurant_id the same as this restaurant
        const reviews = await db.query("SELECT * FROM reviews WHERE restaurant_id = $1", [
          id,
        ]);
      res.status(200).json({
        status: "success",
        data: {
            restaurant: restaurant.rows[0],
            reviews: reviews.rows,
        },
      });
    }
    catch(err) {
        console.log(err);
    }
});

//CREATE a restaurant

app.post("/api/v1/restaurants", async (req, res) => {
    console.log(req.body);

    try {
        const results = await db.query("INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3) RETURNING*", [
            req.body.name, req.body.location, req.body.price_range
        ]);
        res.status(201).json({
          status: "success",
          data: {
            restaurant: results.rows[0],
          },
        });
    }
    catch (err) {
        console.log(err);
    }
});

// UPDATE a restaurant

app.put("/api/v1/restaurants/:id", async (req, res) => {
    try {
        const results = await db.query(
            "UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 RETURNING*",
            [req.body.name, req.body.location, req.body.price_range, req.params.id]
        );
        res.status(200).json({
          status: "success",
          data: {
            restaurant: results.rows[0],
          },
        });
    }
    catch (err) {
        console.log(err);
    }
});

app.delete("/api/v1/restaurants/:id", async (req, res) => {
    try {
        const results = await db.query("DELETE FROM restaurants WHERE id = $1", [
            req.params.id,
        ]);
        res.status(200).json({
            status: "success",
        });
    }
    catch (err) {
        
    }
})

// POST a review

app.post("/api/v1/restaurants/:id/add_review", async (req, res) => {
    try {
        const response = await db.query("INSERT INTO reviews (restaurant_id, name, review, rating) VALUES ($1, $2, $3, $4) RETURNING*", [
            req.params.id, req.body.name, req.body.review, req.body.rating
        ])
        res.status(200).json({
          status: "success",
          data: {
            review: response.rows[0],
          },
        });
    } catch (err) {
        console.log(err);
    }
});

const port = process.env.PORT || 3005;
app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`);
});