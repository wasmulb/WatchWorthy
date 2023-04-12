import { gql, useMutation } from '@apollo/client';


const MovieList = ({movieLists}) =>{
if (movieLists.length === 0){
    return <h1 className='noMovieText'>No Movie Lists!</h1>
}


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
          <button type="submit" className="btn btn-primary btn-block btn-large">Add to My Lists!</button>
        </div>
      ))}
    </div>
  )

}

export default MovieList;