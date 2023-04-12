const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        movieLists: [MovieList]
        watchedMovies: [Movie]   
    }

    type MovieList {
        _id: ID
        listName: String
        movies: [Movie]
    }

    type Movie {
        _id: ID
        title: String
        director: String
        yearReleased: String
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        users: [User]
        me: User
        movies: [Movie]
        movieLists: [MovieList]
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        saveMovieList(movieListId: String!): User
        watchedMovie(movieId: String!): User
    }
`;

module.exports = typeDefs;