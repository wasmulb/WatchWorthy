const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        users: [User]
        me: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        saveMovieList(movieListId: String!): User
    }
`;

module.exports = typeDefs;