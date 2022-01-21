import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { UserContextProvider } from "../context/AuthContext";
import "../styles/globals.css";
import { MainLayout } from "../components/MainLayout";
import NProgress from 'nprogress';
import "bootstrap/dist/css/bootstrap.min.css";
import '/public/nprogress.css';
import { useRouter } from 'next/router'

export default function MyApp(props) {

  const { Component, pageProps } = props;
    const router = useRouter()
    React.useEffect(() => {
        const handleStart = (url) => {
            console.log(`Loading: ${url}`)
            NProgress.start()
        }
        const handleStop = () => {
            NProgress.done()
        }

        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleStop)
        router.events.on('routeChangeError', handleStop)

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleStop)
            router.events.off('routeChangeError', handleStop)
        }
    }, [router])

  return (
    <React.Fragment>
      <Head>
        <title>Iglesia IFGF </title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <UserContextProvider>
        <MainLayout >
          <Component {...pageProps} />
        </MainLayout>
      </UserContextProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
