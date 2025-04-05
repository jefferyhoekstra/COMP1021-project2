// ------- initialization ------- \\
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const server = express();
const Movies = require("./models/movies")
const port = 3000;
const { DB_URI } = process.env;

// ------- middleware ------- \\
server.use(express.static("public"));
server.set("view engine", "ejs");
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// ------- database connection ------- \\
mongoose
    .connect(DB_URI)
    .then(() =>
        server.listen(port, () => {
            console.log(`Connected to databse ${mongoose.connection.name}\nServer is listening on port ${port}`);
        })).catch((error) => console.log(error));

// ------- routes ------- \\

// index route
server.get("/:movies", async (request, response) => {
    const { filter } = request.query;
    try {
        const movies = await Movies.find();
        if (filter === "PG" || filter === "PG-13" || filter === "R") {
            const filteredMovies = movies.filter((movies) => movies.ageRating === filter);
            response.render("moviesIndexPage", { movies: filteredMovies, filter })
        } else {
    // list movies
        response.render("moviesIndexPage", { movies, filter });
        }
    } catch {
        response.status(500).send("Data not found!")
    }

});