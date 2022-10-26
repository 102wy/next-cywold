import { ThemeProvider } from "styled-components";
import Theme from "../styles/Theme";
import GlobalStyle from "../styles/GlobalStyles";
import Layout from "./Layout";
import { ApolloProvider } from "@apollo/client";
import client from '../apollo-client';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
