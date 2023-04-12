import { gql } from '@apollo/client';

export const MY_PROFILE = gql`
query Me {
  me {
    username
    _id
    email
    movieLists {
      listName
      movies {
        director
        title
        yearReleased
      }
    }
    watchedMovies {
      title
      director
      yearReleased
    }
  }
}
`;

export const ALL_LISTS =gql`
query MovieLists {
  movieLists {
    _id
    listName
    movies {
      title
      director
      yearReleased
    }
  }
}
`;