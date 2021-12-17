import styles from "../styles/style.module.css";
import Cards from "../components/Cards";
import "bootstrap/dist/css/bootstrap.min.css";
import { Grid } from "@material-ui/core";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Noticias from "../components/Noticias";
import Messages from "../components/Messages";
import Albums from "../components/Albums";
import React, { useEffect, useState } from "react";
import { useNews } from "../hooks/useNews";
import { useAlbums } from "../hooks/useAlbums";
import { useMessages } from "../hooks/useMessages";

const News = ({}) => {

  const news = useNews();
  const messages = useMessages();
  const albums = useAlbums();

  return (
    <body className={styles.body}>
      <Header />
      <Navbar />

      <Carousel />

      <div className={styles.events}>
        <h1 className={styles.section}>Conoce nuestros eventos</h1>
        <div className={styles.linea}></div>
      </div>
      <Cards />

      <div className={styles.news}>
        <h1 className={styles.section}>Entérate de nuestras noticias</h1>
        <div className={styles.linea}></div>
      </div>

      <div className="container">
        <Noticias news={news} />
      </div>
      <div className="container">
        <Messages messages={messages} />
      </div>
      <div className="container">
        <Albums albums={albums} />
      </div>

      <div className={styles.donaciones}>
        <Grid container={12}>
          <Grid xs={6}>
            <h1>Tu donación nos ayuda a llevar este mensaje al mundo</h1>

            <div className={styles.btndonaciones}>
              <button type="button" className="btn btn-primary">
                Donar aquí
              </button>
            </div>
          </Grid>
          <Grid xs={6}>
            <h1>
              <img
                className={styles.imagedonaciones}
                src="https://wwwhatsnew.com/wp-content/uploads/2018/01/PayPal-tarjeta-de-credito.jpg"
              />
            </h1>
          </Grid>
        </Grid>
      </div>
    </body>
  );
};

export default News;
