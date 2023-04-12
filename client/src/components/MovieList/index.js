import { gql, useMutation } from '@apollo/client';
import { ADD_LIST } from '../../utils/mutations';



const MovieList = ({ movieLists }) => {
  const [addList] = useMutation(ADD_LIST);

  const handleAddToList = (movieListId) => {
    console.log(movieListId);
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
console.log(movieLists)
  return (
    <div className='movieListContainer'>
      {movieLists.map((movieList, index) => (
        <div key={index} className='movieListCard'>
          {movieList.listName}
          <div className='movieInfo'>
            {movieList.movies.map((movie, index) => (
              <div key={index} className='movieText'>
                Movie Title: {movie.title}, Movie Director: {movie.director}, Year Released: {movie.yearReleased}
              </div>
            ))}
          </div>
          <button type="submit" className="btn btn-primary btn-block btn-large" onClick={() => handleAddToList(movieList._id)}>Add to My Lists!</button>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
