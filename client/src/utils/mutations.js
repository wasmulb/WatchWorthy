import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_LIST = gql`
mutation Mutation($movieListId: String!) {
  saveMovieList(movieListId: $movieListId) {
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
  }
}
`;

export const WATCHED_MOVIE = gql`
mutation Mutation($movieId: String!) {
  watchedMovie(movieId: $movieId) {
    watchedMovies {
      title
      yearReleased
      director
    }
  }
}
`;
