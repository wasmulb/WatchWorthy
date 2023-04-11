const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        movieLists: [MovieList]   
    }

    type MovieList {
        listName: String
        movies: [Movie]
    }

    type Movie {
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
    }
`;

module.exports = typeDefs;