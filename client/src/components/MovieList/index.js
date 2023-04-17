import { gql, useMutation } from '@apollo/client';
import { ADD_LIST } from '../../utils/mutations';
import { useState } from 'react';


const MovieList = ({ movieLists }) => {
  const [addList] = useMutation(ADD_LIST);
  const [visibleMovieCount, setVisibleMovieCount] = useState(5);
  const handleShowMoreClick = () => {
    setVisibleMovieCount(visibleMovieCount + 5);
  };
  const handleShowLessClick = () => {
    setVisibleMovieCount(visibleMovieCount - 5);
  };
  const handleAddToList = (movieListId) => {

    addList({ variables: { movieListId } })
      .then((response) => {
        console.log('Movie list added successfully!', response);
      })
      .catch((error) => {
        console.error('Error adding movie list:', error);
      });
  };

  if (movieLists.length === 0) {
    return <h1 className='noMovieText'>No Movie Lists!</h1>;
  }
  return (
    <div className='movieListContainer'>
      {movieLists.map((movieList, index) => (
        <div key={index} className='movieListCard'>
         <h1>{movieList.listName}</h1>
          <div className='movieInfo'>
            {movieList.movies.slice(0, visibleMovieCount).map((movie, index) => (
              <div key={index} className='movieText'>
                <h4 className= 'movieTitleAllLists'>{movie.title}</h4> <p className ='smallMovieText'> Directed by <strong>{movie.director}</strong> <em>{movie.yearReleased}</em></p>
              </div>
            ))}
            {visibleMovieCount < movieList.movies.length && (
            <button className="btn1 btn1-primary btn1-large" onClick={handleShowMoreClick}>Show more</button>)}
            {visibleMovieCount > 5 && (
            <button className="btn1 btn1-primary btn1-large" onClick={handleShowLessClick}>Show Less</button>)}
          </div>
          <button type="submit" className="btn3 btn3-primary btn3-block btn3-large" onClick={() => handleAddToList(movieList._id)}>Add to My Lists!</button>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
