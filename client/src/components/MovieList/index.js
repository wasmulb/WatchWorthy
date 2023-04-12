const MovieList = ({movieLists, data}) =>{
if (movieLists.length === 0){
    return <h1>No Movie Lists!</h1>
}

return (
<div className = 'movieListContainer'>
{
   movieLists.map((movieList, index) => (
    <div key={index} className='movieListCard'>
        {movieList.listName}
       <div className= 'movieInfo'> 
             <div className= 'movieText'> Movie Title: {movieList.movies[0].title}, Movie Director: {movieList.movies[0].director}, Year Released: {movieList.movies[0].yearReleased}</div>
             <div className= 'movieText'> Movie Title: {movieList.movies[1].title}, Movie Director: {movieList.movies[1].director}, Year Released: {movieList.movies[1].yearReleased}</div>
             <div className= 'movieText'> Movie Title: {movieList.movies[2].title}, Movie Director: {movieList.movies[2].director}, Year Released: {movieList.movies[2].yearReleased}</div>
             <div className= 'movieText'> Movie Title: {movieList.movies[3].title}, Movie Director: {movieList.movies[3].director}, Year Released: {movieList.movies[3].yearReleased}</div>
             <div className= 'movieText'> Movie Title: {movieList.movies[4].title}, Movie Director: {movieList.movies[4].director}, Year Released: {movieList.movies[4].yearReleased}</div>
        </div>
        <button type="submit" className="btn btn-primary btn-block btn-large">Add to My Lists!</button>

    </div>
  
    ))
    
}

</div>
);
}

export default MovieList;