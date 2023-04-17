export function filterMovies(movieList, watchedMoviesList) {
  const watchedMoviesArray = [];
  const unwatchedMoviesArray = [];

  const objToString = (obj) => obj._id;
  const objSet = new Set(watchedMoviesList.map(objToString));

  console.log(objSet)
  for (const obj1 of movieList) {
    console.log(obj1)
    const obj1Id = objToString(obj1);
    console.log(obj1Id)
    if (objSet.has(obj1Id)) {
      watchedMoviesArray.push(obj1);
      objSet.delete(obj1Id);
    } else {
      unwatchedMoviesArray.push(obj1);
    }
  }

  const unwatchedMoviesArray2 = Array.from(objSet).map((id) => {
    return movieList.find((movie) => movie._id === id);
  });
let unwatchedMoviesArray3 = unwatchedMoviesArray.concat(unwatchedMoviesArray2)
  return [watchedMoviesArray, unwatchedMoviesArray3];
}