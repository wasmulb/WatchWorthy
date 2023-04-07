const { Schema, model } = require('mongoose');
const movieSchema = require('./Movie')

const movieListSchema = new Schema(
    {
        listName: {
            type: String,
            required: true,
            unique: true,
        },
        movies: [{
            type: Schema.Types.ObjectId,
            ref: "Movie"
        }],
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);


const MovieList = model('MovieList', movieListSchema);

module.exports = MovieList;