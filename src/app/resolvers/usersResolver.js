const queries = {
  user: (_, { id }) => ({
    id,
    name: 'John Doe'
  })
}

const mutations = {
  createUser: (_, { input }) => {
    console.log('createUser input', input)

    return {
      id: 'user-id',
      name: 'John Doe'
    }
  }
}

module.exports = { queries, mutations }
