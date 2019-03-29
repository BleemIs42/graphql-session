import { ApolloServer, gql } from 'apollo-server'
import fetch from 'node-fetch'

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    age: Int!
  }
  type Query {
    "A simple type for getting started!"
    hello: String,
    helloMock: String,
  }

  type Mutation {
    user( name: String!, age: Int! ): User!
  }
`;

const resolvers = {
  Query: {
    hello: () => 'world',
    helloMock: () =>
    fetch('https://fourtonfish.com/hellosalut/?mode=auto')
      .then(res => res.json())
      .then(data => data.hello)
  },
  Mutation: {
    user: (parent, args) => {
        // update/save data to database
        console.log(parent, args)
        return args
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
