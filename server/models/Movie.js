const { Schema, model } = require('mongoose');

const movieSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        director: {
            type: String,
            required: true,
        },
        yearReleased: {
            type: String,
            required: true,
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);


const Movie = model('Movie', movieSchema);

module.exports = Movie;