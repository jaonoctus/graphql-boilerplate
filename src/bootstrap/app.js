const { ApolloServer } = require('apollo-server')
const { schemaFactory } = require('./schema')

let started = false

const app = async () => {
  if (started) {
    return Promise.reject(new Error('app has already started'))
  }

  started = true

  const schema = schemaFactory()

  const server = new ApolloServer({
    schema
  })

  server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`)
  })
}

module.exports = { app }
