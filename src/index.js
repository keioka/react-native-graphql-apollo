import React from 'react';
import { AsyncStorage } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import Routes from './routes';

/**
 * ApolloLink:
 *
 * Apollo Links are chainable “units” that you can snap together to define how each GraphQL request is handled by your GraphQL client. When you fire a GraphQL request, each Link’s functionality is applied one after another. This allows you to control the request lifecycle in a way that makes sense for your application. For example, Links can provide retrying, polling, batching, and more!
 *   - For simple HTTP requests, we recommend using apollo-link-http:
 * Available Links
 *   - apollo-link-http
 *   - apollo-link-state
 *   - apollo-link-error
 *   - apollo-link-retry
 *   - apollo-link-context
 *   - apollo-link-ws
 */
import { ApolloClient, InMemoryCache, ApolloLink } from 'apollo-client-preset';

import { HttpLink } from 'apollo-link-http';
// Enhances Apollo for intuitive file uploads via GraphQL queries or mutations.
import { createUploadLink } from 'apollo-upload-client';

/**
 * https://github.com/apollographql/apollo-link/tree/master/packages/apollo-link-context
 * The setContext function takes a function that returns either an object or a promise that returns an object to set the new context of a request.
 * It receives two arguments: the GraphQL request being executed, and the previous context. This link makes it easy to perform async look up of things like authentication tokens and more!
 */
import { setContext } from 'apollo-link-context';

/**
 * Use the Apollo Client cache as your single source of truth that holds all of your local data alongside your remote data.
 * To access or update your local state, you use GraphQL queries and mutations just like you would for data from a server.
 */
import { withClientState } from 'apollo-link-state';

const cache = new InMemoryCache();

const defaults = {
  isLogined: false
};

const stateLink = withClientState({
  cache,
  resolvers: {
    Mutation: {},
  },
  defaults
});

//  Interface for fetching and modifying control flow of GraphQL requests
const client = new ApolloClient({
  cache,
  link: ApolloLink.from([
    stateLink,
    new HttpLink()
  ]),
});

export default () => (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
);
