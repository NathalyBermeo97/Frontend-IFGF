import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../styles/theme";
import { Grid } from "@material-ui/core";
import Headernologin from "../components/Headernologin";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Contacts from "../components/Contacts";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  return (
      <React.Fragment >
        <Head>
          <title>Iglesia IFGF </title>
          <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>





            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />

            <Component {...pageProps} />






      </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
