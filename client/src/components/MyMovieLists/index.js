const MyMovieLists = ({ me }) => {
  if (!me || !me.movieLists || me.movieLists.length === 0) {
    return <h1 className='noMovieText'>No Movie Lists!!!</h1>;
  }

  return (
    <div className='myMovieListContainer'>
      {me.movieLists.map((list, index) => (
        <div key={index} className='movieListCard'>
          {list.listName}
          <input type="checkbox" className="checkbox" id="checkbox1" value="watched">
              <label for="checkbox1"> Watched</label> </input>
        </div>
      ))}
    </div>
  );
};

export default MyMovieLists;
