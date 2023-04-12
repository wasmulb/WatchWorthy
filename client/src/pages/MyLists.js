import React from 'react'
import Footer from '../components/Footer'
import MyMovieList from '../components/MyMovieLists'
import { useQuery } from '@apollo/client'
import { MY_PROFILE } from '../utils/queries'

function MyLists() {
  const { loading, data } = useQuery(MY_PROFILE);
  const movieLists = data?.movieLists || [];


  return (
    <div className ="allListsWrapper">
    <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div className = 'loading'>Loading...</div>
          ) : (<>
            <MyMovieList
              movieLists={movieLists}
              title="Here's your current tracked lists..."
            />
          </>

          )}
        </div>

    <Footer/>

</div>
  )
}

export default MyLists