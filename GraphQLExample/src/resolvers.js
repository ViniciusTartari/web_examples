const User = require("./models/User");

module.exports = {
  Query: {
    users: () => User.find(),
    user: (_, { id }) => User.findById(id)
  },
  Mutation: {
    createUser: (_, { name, email }) => User.create({ name, email }),
    updateUser: (_, { name, email }) =>
      User.findOneAndUpdate({ email }, { name, email }),
    deleteUser: (_, { id }) => User.findByIdAndRemove(id)
  }
};
