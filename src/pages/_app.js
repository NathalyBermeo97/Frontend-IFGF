import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

import CssBaseline from "@material-ui/core/CssBaseline";
import { UserContextProvider } from "../context/UserContext";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  return (
    <React.Fragment>
      <Head>
        <title>Iglesia IFGF </title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />

      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
