import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { MY_PROFILE } from '../../utils/queries';
import { useState } from 'react';
import { filterMovies } from '../../utils/filterMovies';
import { WATCHED_MOVIE } from '../../utils/mutations';
import { UNWATCH_MOVIE } from '../../utils/mutations';

const MyMovieLists = () => {
  const { loading, error, data } = useQuery(MY_PROFILE);
  const [visibleMovieCount, setVisibleMovieCount] = useState(0);
  const [watchedMovie] = useMutation(WATCHED_MOVIE);
  const [unwatchMovie] = useMutation(UNWATCH_MOVIE);

  const handleShowMoreClick = () => {
    setVisibleMovieCount(visibleMovieCount + 5);
  };

  const handleShowLessClick = () => {
    setVisibleMovieCount(visibleMovieCount - 5);
  };


  if (loading) return <h3 className='noMovieText'>Loading...</h3>;
  if (error) return <p className='noMovieText'>Error : no user logged in</p>;

  const { movieLists } = data.me;

  if (movieLists.length === 0) {
    return <h1 className='noMovieText'>No Movie Lists!</h1>;
  }
  

  return (
    <div className='movieListContainer'>
      {movieLists.map((movieList, index) => {
        const [watchedMovies, unwatchedMovies] = filterMovies(
          movieList.movies,
          data.me.watchedMovies
        );
          console.log(watchedMovies)
          console.log(unwatchedMovies)
        return (
          <div key={index} className='movieListCard'>
            <h1>{movieList.listName} </h1>
            <p>Progress: {watchedMovies.length} / {movieList.movies.length} watched</p>
            <div className='movieInfo'>
              {unwatchedMovies.slice(0, visibleMovieCount).map((movie, index) => (
                <div key={index} className='movieText'>
                  <p>{movie.title} | Director: {movie.director} | {movie.yearReleased}</p>
                  <button type="submit" className="btn btn-primary btn-block btn-large" onClick={() => watchedMovie(movie._id)}>Mark as watched!</button>
                </div>
              ))}
              {watchedMovies.slice(0, visibleMovieCount).map((movie, index) => (
                <div key={index} className='movieText'>
                  <p>{movie.title} | Director: {movie.director} | {movie.yearReleased}</p>
                  <button type="submit" className="btn btn-primary btn-block btn-large" onClick={() => watchedMovie(movie._id)}>Watched!</button>
                </div>
              ))}
              {visibleMovieCount < unwatchedMovies.length && (
                <button className='btn btn-primary btn-large' onClick={handleShowMoreClick}>
                  Show more
                </button>
              )}
              {visibleMovieCount < watchedMovies.length && (
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
            
          ))}
          {visibleMovieCount < movieList.movies.length && (
            <button className="btn1 btn1-primary btn1-large" onClick={handleShowMoreClick}>Show more</button>)}
            {visibleMovieCount > 5 && (
            <button className="btn1 btn1-primary btn1-large" onClick={handleShowLessClick}>Show Less</button>)}
          </div>
        );
      })}
    </div>
  );
};

export default MyMovieLists;