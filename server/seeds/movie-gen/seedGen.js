const db = require('../../config/connection');
const { Movie } = require('../../models/index');
const newMovies = require('./newMovies.json');

db.once('open', async () => {
    try {
        await Movie.insertMany(newMovies);

        console.log('New movies seeded!')
        process.exit(0);
    } catch (err){
        throw err;
    }
})