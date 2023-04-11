const MovieList = ({movieLists, data}) =>{
if (movieLists.length === 0){
    return <h1>No Movie Lists!</h1>
}

return (
<div>
{
    movieLists.map((movieList, index) => (
        <div key='index'>
            {/* {movieList.listName} */}
            {movieList.movies.title}
        </div>
    ))
}
</div>
);
}

export default MovieList;