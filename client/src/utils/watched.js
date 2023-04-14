export function filterMovies(movieList, watchedMoviesList) {
    const watchedMovies = [];
    const unwatchedMovies = [];
  
    movieList.forEach((movie) => {
      if (watchedMoviesList.includes(movie)) {
        watchedMovies.push(movie);
      } else {
        unwatchedMovies.push(movie);
      }
    });
    return [watchedMovies, unwatchedMovies];
  }
