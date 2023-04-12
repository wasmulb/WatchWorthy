import React from 'react'
import Footer from '../components/Footer'
import MovieList from '../components/MovieList'
import { useQuery } from '@apollo/client'
import { ALL_LISTS } from '../utils/queries'

function AllLists() {
  const { loading, data } = useQuery(ALL_LISTS);
  const movieLists = data?.movieLists || [];


  return (
    <div className ="allListsWrapper">
    <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div className = 'loading'>Loading...</div>
          ) : (<>
            <MovieList
              movieLists={movieLists}
              title="Here's the current roster of movies..."
            />
          </>

          )}
        </div>

    <Footer/>

</div>
  )
}

export default AllLists