require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();
const db = require("./DB/index.js");

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
        console.log(results);
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
      const result = await db.query("SELECT * FROM restaurants WHERE id = $1", [
        id,
      ]);
      console.log(result);
      res.status(200).json({
        status: "success",
        data: {
          restaurant: result.rows[0],
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

const port = process.env.PORT || 3005;
app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`);
});