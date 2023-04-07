const db = require('../config/connection');
const { User, Movie, MovieList } = require('../models/index');
const userSeeds = require('./userSeeds.json');
const movieSeeds = require('./movieSeeds.json');
const movieListSeeds = require('./movieListSeeds');

db.once('open', async () => {
    try {
        await Movie.deleteMany({});
        await Movie.create(movieSeeds);

        await MovieList.deleteMany({});
        await MovieList.create(movieListSeeds);

        await User.deleteMany({});
        await User.create(userSeeds)

        console.log('Database seeded!')
        process.exit(0);
    } catch (err){
        throw err;
    }
})