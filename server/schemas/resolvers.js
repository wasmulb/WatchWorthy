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
            console.log(user, token)
            return { token, user }
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if(!user){
                throw new AuthenticationError('No user found with that username!')
            }

            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw){
                throw new AuthenticationError('Wrong Password!')
            }
            const token = signToken(user);
            return { token, user }
        },
        saveMovieList: async (parent, {movieListId}, context) => {
            if(!context.user){
                throw new AuthenticationError('Error! No user logged in')
            }
            return User.findOneAndUpdate(
                { _id: context.user._id},
                {
                    $addToSet: { movieLists: movieListId },
                },
                {
                    new: true,
                    runValidators: true,
                }
            )
        },
        // watchedMovie: async (parent, {watchedMovie}, context) => {
        //     if(!context.user){
        //         throw new AuthenticationError('Error! No user logged in')
        //     }
        //     return User.findOneAndUpdate(
        //         { _id: context.user._id},
        //         {
        //             $addToSet: { watchedMovies: watchedMovie },
        //         },
        //         {
        //             new: true,
        //             runValidators: true,
        //         }
        //     )
        // }
    }
}

module.exports = resolvers;