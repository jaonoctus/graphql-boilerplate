const usersResolver = require('./usersResolver')

const queryResolvers = () => ({
  ...usersResolver.queries
})

const mutationResolvers = () => ({
  ...usersResolver.mutations
})

module.exports = {
  Query: queryResolvers(),
  Mutation: mutationResolvers()
}
