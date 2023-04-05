const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },
        me: async (parents, args, context) => {
            if(!context.user){
                throw new AuthenticationError('Error, no user logged in!')
            }
            return User.findOne({ _id: context.user._id})
        },
    },
    Mutation: {
        addUser: async (parent, { username, email, password}) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user }
        },
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });
            if(!user){
                throw new AuthenticationError('No user found with that username!')
            }

            const correctPw = await user.isCorrectPassword(password);
        }
    }
}

module.exports = resolvers;