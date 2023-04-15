import { useQuery } from '@apollo/client';
import { MY_PROFILE } from '../../utils/queries';
import { useState } from 'react';

const MyMovieLists = () => {

  const { loading, error, data } = useQuery(MY_PROFILE);



  const [visibleMovieCount, setVisibleMovieCount] = useState(0);
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
    <div className= 'movieListContainer'>
      {movieLists.map((movieList, index) => (
        <div key={index} className='movieListCard'>
          <h1>{movieList.listName} </h1>
          <p >Progress: {movieList.movies.length} </p>
          <div className = 'movieInfo'>
          {movieList.movies.slice(0, visibleMovieCount).map((movie, index) => (
            <div key={index} className='movieText'>
              <p>{movie.title} | 
              Director: {movie.director} | {movie.yearReleased}</p>
              <div class="checkbox-wrapper-26">
                <input type="checkbox" id="_checkbox-26" />
                <label for="_checkbox-26">
                  <div class="tick_mark"></div>
                </label>
                <p className = 'watchedLabel'>Watched</p>
              </div>
            </div>
            
          ))}
          {visibleMovieCount < movieList.movies.length && (
            <button className="btn1 btn1-primary btn1-large" onClick={handleShowMoreClick}>Show more</button>)}
            {visibleMovieCount > 5 && (
            <button className="btn1 btn1-primary btn1-large" onClick={handleShowLessClick}>Show Less</button>)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyMovieLists;
