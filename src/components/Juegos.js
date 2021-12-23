import React, { useState } from "react";
import styles from "../styles/style.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import { Grid } from "@mui/material";

const Juegos = () => {
  return (
    <body className={styles.body}>
      <Navbar />

      <h1 className={styles.section}>JUEGOS</h1>
      <div className={styles.linea}></div>
      <Grid container={12}>
        <Grid xs={8}>
          <div className={styles.formasdona}></div>
        </Grid>

        <Grid xs={4}>
          <div className={styles.formasdona}></div>
        </Grid>
      </Grid>

      <div>
        <h1 className={styles.namejuego}>Juegos interactivos</h1>

        <h4 className={styles.namejuego}>
          Estos cuestinarios te ayudarán a saber más sobre la historia de Dios.
        </h4>
        <div className={styles.juegos}>
          <div className="row">
            <div className="col-sm-4">
              <div className={styles.cardjuegos}>
                <div className="card-body">
                  <h5 className="card-title">
                    Preguntas referentes a la Iglesia
                  </h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="JuegoIglesia" className="btn btn-primary">
                    Ver más
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className={styles.cardjuegos}>
                <div className="card-body">
                  <h5 className="card-title">
                    Preguntas referentes a Historia de Dios
                  </h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="Juegohistoria" className="btn btn-primary">
                    Ver más
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className={styles.cardjuegos}>
                <div className="card-body">
                  <h5 className="card-title">
                    Preguntas referentes a la biblia
                  </h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="Juegosbiblia" className="btn btn-primary">
                    Ver más
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};
export default Juegos;
