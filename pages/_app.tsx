import "../styles/globals.css";
import type { AppProps } from "next/app";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { GraphApolloLink } from "@graphprotocol/client-apollo";
import * as GraphClient from "../.graphclient";

const client = new ApolloClient({
  link: new GraphApolloLink(GraphClient),
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
