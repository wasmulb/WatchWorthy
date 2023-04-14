import { useQuery } from '@apollo/client';
import { MY_PROFILE } from '../../utils/queries';
import { useState } from 'react';
import { filterMovies } from '../../utils/watched';

const MyMovieLists = () => {

  const { loading, error, data } = useQuery(MY_PROFILE);



  const [visibleMovieCount, setVisibleMovieCount] = useState(0);
  const handleShowMoreClick = () => {
    setVisibleMovieCount(visibleMovieCount + 5);
  };
  const handleShowLessClick = () => {
    setVisibleMovieCount(visibleMovieCount - 5);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  const { movieLists } = data.me;

  if (movieLists.length === 0) {
    return <h1>No Movie Lists!</h1>;
  }

  return (
    <div className= 'movieListContainer'>
      {movieLists.map((movieList, index) => (
        <div key={index} className='movieListCard'>
          {movieList.listName} 
          <p >Progress: {movieList.movies.length} </p>
          <div className = 'movieInfo'>
          {movieList.movies.slice(0, visibleMovieCount).map((movie, index) => (
            <div key={index} className='movieText'>
              {movie.title}
              Director: {movie.director}
              Year Released: {movie.yearReleased}
            </div>
            
          ))}
          {visibleMovieCount < movieList.movies.length && (
            <button onClick={handleShowMoreClick}>Show more</button>)}
            {visibleMovieCount > 5 && (
            <button onClick={handleShowLessClick}>Show Less</button>)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyMovieLists;
