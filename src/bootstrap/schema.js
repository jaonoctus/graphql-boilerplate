const { makeExecutableSchema } = require('apollo-server')
const { importSchema } = require('graphql-import')

const DIR_NAME = __dirname

const importTypeDefs = () => importSchema(`${DIR_NAME}/../app/schema/schema.graphql`)

const importResolvers = () => require(`${DIR_NAME}/../app/resolvers`)

const schemaFactory = () => {
  const typeDefs = importTypeDefs()
  const resolvers = importResolvers()

  const schema = makeExecutableSchema({ typeDefs, resolvers })

  return schema
}

module.exports = { schemaFactory }
