// ------- initializations ------- \\
const mongoose = require("mongoose");
const { describe } = require("node:test");
const Schema = mongoose.Schema;

// ------- schema ------- \\
const moviesSchema = new Schema ({
    title: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    poster: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    cast: {
        type: [String],
        required: true,
    },
    showtimes: {
        type: [String],
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    ageRating: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

// ------- exporting ------- \\
const Movies = mongoose.model("Movies", moviesSchema, "movies");
module.exports = Movies;