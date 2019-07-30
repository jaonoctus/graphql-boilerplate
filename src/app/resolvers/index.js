const usersResolver = require('./usersResolver')

const queryResolvers = () => ({
  ...usersResolver
})

module.exports = {
  Query: queryResolvers()
}
