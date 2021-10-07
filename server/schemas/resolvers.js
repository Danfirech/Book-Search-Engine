const { Book, User } = require("../models");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("thoughts");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
  Mutation: {
    adduser: async (parent, args) => {
      const user = awaitUser.create(args);
      const tokem = signToken(user);

      return { token, user };
    },
  },

  login: async (parent, { email, password }) => {
    const user = await User.findone({ email });

    it(!user) {
      throw new AuthenticationError('Login info not recognized');
    }
    const correctPw = await user.isCorrectPassword(password);

    if(!correctPw) {
      throw new AuthenticationError("incorrect credentials");
    }

    const token = signToken(user);
    return {token, user};

  },

  saveBook: async (parent, args, context) => {
    if (context.user) {
      const updatedUser = await User.findByIdAndUpdate(
        {_id: context.user._id},
        { $addToSet: {savedBooks: args.input}},
        {new: true}
      );
      return updatedUser;
    }

    throw new AuthenticationError("Please log in")
  }
};

removeBook: async (parent, args, context) => {
  if(context.user) {
    const updatedUser = await User.findOneAndUpdate(
      {_id: context.user._id},
      {$pull: { savedBooks: {bookId: args.bookId}}},
      {new: true}
    );
    return updatedUser;
  }

  throw new AuthenticationError("Please log in")
}

module.exports = resolvers;
