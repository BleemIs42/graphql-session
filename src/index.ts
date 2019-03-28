import ApolloClient from 'apollo-client'
import { RestLink } from "apollo-link-rest"
import { InMemoryCache } from 'apollo-cache-inmemory'
import gql from 'graphql-tag'

import fetch from 'node-fetch'
global.Headers = global.Headers || require('fetch-headers')
global.Headers.prototype.forEach = Array.prototype.forEach

const restLink = new RestLink({
  customFetch: fetch,
  uri: 'https://swapi.co/api/',
  headers: {
    'Content-Type': 'application/json'
  },
});

const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});

const query = gql`
  query Person {
    person @rest(type: "Person", path: "people/1") {
      name
      height
      mass,
      hair_color
    }
  }
`;

client.query({ query }).then(response => {
  console.log(response.data);
});