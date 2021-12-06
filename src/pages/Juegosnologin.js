import React, { useState } from "react";
import styles from "../styles/style.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import {Grid} from "@mui/material";
import Search from "../components/Search";
import Filtrojuegos from "../components/Filtrojuegos";
import Headernologin from "../components/Headernologin";
import Navbarnologin from "../components/Navbarnologin";

const Juegosnologin = () => {

    return (
        <body className={styles.body} >
        <Headernologin/>
        <Navbarnologin/>

        <h1 className={styles.section} >
            JUEGOS
        </h1>
        <div className={styles.linea}></div>

        <div>
            <div>
            <h1 className={styles.namejuego}>
                Juegos interactivos
            </h1>
            </div>

            <h4  className={styles.namejuego}>
                Estos cuestionarios te ayudarán a saber más sobre la historia de Dios.
            </h4>
            <div className={styles.juegos}>
                <div className="row">
                    <div className="col-sm-4">
                        <div className={styles.cardjuegos}>
                            <div className="card-body">
                                <h5 className="card-title">Preguntas referentes a la Iglesia</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                                <a href="LoginComponent" className="btn btn-primary">Ver más</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className={styles.cardjuegos}>
                            <div className="card-body">
                                <h5 className="card-title">Preguntas referentes a Historia de Dios</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                                <a href="LoginComponent" className="btn btn-primary">Ver más</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className={styles.cardjuegos}>
                            <div className="card-body">
                                <h5 className="card-title">Preguntas referentes a la biblia</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                                <a href="LoginComponent" className="btn btn-primary">Ver más</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

        </body>
    )

}
export default Juegosnologin;