import styles from '../styles/style.module.css';
import Cards from "../components/Cards";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Grid} from "@material-ui/core";
import Carousel from "../components/Carousel"
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Noticias from "../components/Noticias";
import React from "react";

const News = ({ news }) => {
  return (
      <body className={styles.body} >
      <Header/>
      <Navbar/>

        <Carousel/>

        <div className={styles.events}>

          <h1 className={styles.section}>
            Conoce nuestros eventos
          </h1>
          <div className={styles.linea}></div>

        </div>
        <Cards/>

        <div className={styles.news}>

          <h1 className={styles.section}>
            Entérate de nuestras noticias
          </h1>
          <div className={styles.linea}></div>

        </div>


        <div className="container" >

          <Noticias/>
        </div>


        <div className={styles.donaciones}>
          <Grid container={12}>


            <Grid xs={6}>
              <h1>
                Tu donación nos ayuda a llevar este mensaje al mundo
              </h1>

              <div className={styles.btndonaciones}>
                <button type="button" className="btn btn-primary">Donar aquí</button>
              </div>
            </Grid>
            <Grid xs={6}>
              <h1>
                <img className={styles.imagedonaciones} src="https://wwwhatsnew.com/wp-content/uploads/2018/01/PayPal-tarjeta-de-credito.jpg"/>
              </h1>

            </Grid>

          </Grid>

        </div>

      </body>
  );
};

export default News;

