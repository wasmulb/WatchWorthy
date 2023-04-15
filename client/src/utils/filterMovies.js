// export function filterMovies(movieList, watchedMoviesList) {
//   let watchedMoviesArray = [];
//   let unwatchedMoviesArray = [];

//   movieList.forEach((movie) => {
//     const isWatched = watchedMoviesList.some((watchedMovie) => watchedMovie.id === movie.id);
//     if (isWatched) {
//       watchedMoviesArray.push(movie);
//     } else {
//       unwatchedMoviesArray.push(movie);
//     }
//   });

//   return [watchedMoviesArray, unwatchedMoviesArray];
// }

// let watched = [{
//   "id": "1",
//   "title": "Happy Gilmore",
//   "director": "Adam Sandler",
//   "yearReleased": "1999"
// },
//   {
//   "id": "2",
//   "title": "The Grinch",
//   "director": "Dr .Seuss",
//   "yearReleased": "1999"
//   }]

//   let list = [{
//     "id": "1",
//     "title": "Happy Gilmore",
//     "director": "Adam Sandler",
//     "yearReleased": "1999"
//   },
//     {
//     "id": "3",
//     "title": "Billy Madison",
//     "director": "Adam Sandler",
//     "yearReleased": "1999"
//     }]

export function filterMovies(movieList, watchedMoviesList) {
      const watchedMoviesArray = [];
      const unwatchedMoviesArray = [];
    
      const objToString = (obj) => obj.id;
      const objSet = new Set(watchedMoviesList.map(objToString));
    
      for (const obj1 of movieList) {
        const obj1Id = objToString(obj1);
        if (objSet.has(obj1Id)) {
          watchedMoviesArray.push(obj1);
          objSet.delete(obj1Id);
        } else {
          unwatchedMoviesArray.push(obj1);
        }
      }
    
      const unwatchedMoviesArray2 = Array.from(objSet).map((id) => {
        return movieList.find((movie) => movie.id === id);
      });
    
      // console.log(
      //   "watched Array",
      //   watchedMoviesArray,
      //   "unwatched Array",
      //   unwatchedMoviesArray.concat(unwatchedMoviesArray2)
      // );
    
      return [watchedMoviesArray, unwatchedMoviesArray.concat(unwatchedMoviesArray2)];
    }

// filterMovies(list, watched)