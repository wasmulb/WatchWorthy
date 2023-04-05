const { Schema, model } = require('mongoose');

const movieListSchema = new Schema(
    {
        listName: {
            type: String,
            required: true,
            unique: true,
        },
        movies: [movieSchema],
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);


const MovieList = model('MovieList', movieListSchema);

module.exports = MovieList;