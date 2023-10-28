import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const link = createHttpLink({
  uri: process.env.API_URL,
});

export const fetchProvider = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});
