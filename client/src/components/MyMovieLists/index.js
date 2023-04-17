import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { MY_PROFILE } from '../../utils/queries';
import { useState } from 'react';
import { filterMovies } from '../../utils/filterMovies';
import { WATCHED_MOVIE } from '../../utils/mutations';
import { UNWATCH_MOVIE } from '../../utils/mutations';

const MyMovieLists = () => {
  const { loading, error, data, refetch } = useQuery(MY_PROFILE);
  const [visibleMovieCount, setVisibleMovieCount] = useState(0);
  const [watchedMovie] = useMutation(WATCHED_MOVIE);
  const [unwatchMovie] = useMutation(UNWATCH_MOVIE);

  const handleShowMoreClick = () => {
    setVisibleMovieCount(visibleMovieCount + 5);
  };

  const handleShowLessClick = () => {
    setVisibleMovieCount(visibleMovieCount - 5);
  };

  const markAsWatched = (movieId) => {

    watchedMovie({ variables: { movieId } })
      .then((response) => {
        console.log('Movie added successfully!', response);
        refetch()
      })
      .catch((error) => {
        console.error('Error adding movie:', error);
      });
  };

  const markAsUnwatched = (movieId) => {

    unwatchMovie({ variables: { movieId } })
      .then((response) => {
        console.log('Movie removed successfully!', response);
        refetch()
      })
      .catch((error) => {
        console.error('Error adding movie:', error);
      });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error :</p>;
  }

  const { movieLists } = data.me;

  if (movieLists.length === 0) {
    return <h1>No Movie Lists!</h1>;
  }
  

  return (
    <div className='movieListContainer'>
      {movieLists.map((movieList, index) => {
        const [watchedMoviesArray, unwatchedMoviesArray3] =filterMovies(
          movieList.movies,
          data.me.watchedMovies
        );
        return (
          <div key={index} className='movieListCard'>
            <h1>{movieList.listName} </h1>
            <p>Progress: {watchedMoviesArray.length} / {movieList.movies.length} watched</p>
            <div className='movieInfo'>
              {unwatchedMoviesArray3.slice(0, visibleMovieCount).map((movie, index) => (
                <div key={index} className='movieText'>
                  <p>{movie.title} | Director: {movie.director} | {movie.yearReleased}</p>
                  <button type="submit" className="btn btn-primary btn-block btn-large" onClick={() => {
                    markAsWatched(movie._id)}}>Mark as watched!</button>
                </div>
              ))}
              {watchedMoviesArray.slice(0, visibleMovieCount).map((movie, index) => (
                <div key={index} className='movieText'>
                  <p>{movie.title} | Director: {movie.director} | {movie.yearReleased}</p>
                  <button type="submit" className="btn btn-primary btn-block btn-large" onClick={() => markAsUnwatched(movie._id)}>Watched! Click to remove as Watched</button>
                </div>
              ))}
              {visibleMovieCount < unwatchedMoviesArray3.length + watchedMoviesArray.length && (
                <button className='btn btn-primary btn-large' onClick={handleShowMoreClick}>
                  Show more
                </button>
              )}
              {visibleMovieCount > 5 && (
                <button className='btn btn-primary btn-large' onClick={handleShowLessClick}>
                  Show less
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyMovieLists;