import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "../components/Navbar";
import styles from "../styles/style.module.css";
import { Grid } from "@mui/material";
import React from "react";

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
        <h1 className={styles.namejuego}>
          Cuanto sabes sobre la historia de Jesús?
        </h1>

        <h4 className={styles.namejuego}>
          Estos cuestinarios te ayudarán a saber más sobre la historia de Dios.
        </h4>
        <div className={styles.juegos}>
          <div className="row">
            <div className="col-sm-4">
              <div className={styles.cardjuegos}>
                <div className="card-body">
                  <h5 className="card-title">Juego N1</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className={styles.cardjuegos}>
                <div className="card-body">
                  <h5 className="card-title">Juego N2</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className={styles.cardjuegos}>
                <div className="card-body">
                  <h5 className="card-title">Juego N3</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className={styles.cardjuegos}>
                <div className="card-body">
                  <h5 className="card-title">Juego N4</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className={styles.cardjuegos}>
                <div className="card-body">
                  <h5 className="card-title">Juego N5</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className={styles.cardjuegos}>
                <div className="card-body">
                  <h5 className="card-title">Juego N6</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
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
