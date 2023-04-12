const db = require('../config/connection');
const { Movie, MovieList } = require('../models/index');
const movies = require('./movies.json');
const movieListSeeds = require('./movieListSeeds');

db.once('open', async () => {
    try {
        await Movie.deleteMany({});
        await Movie.insertMany(movies);

        await MovieList.deleteMany({});
        await MovieList.create(movieListSeeds);

        console.log('Database seeded!')
        process.exit(0);
    } catch (err){
        throw err;
    }
})