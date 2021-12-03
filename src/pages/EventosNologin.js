import React, { useRef, useState } from "react";
import {Button} from "antd";
//import { Button } from 'antd';
import styles from '../styles/style.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Grid} from "@material-ui/core";
import Headernologin from "../components/Headernologin";
import Navbarnologin from "../components/Navbarnologin";


const EventosNologin = () => {
    return (
        <body className={styles.body} >
        <Headernologin/>
        <Navbarnologin/>

        <div className={styles.form}>

            <div className={styles.events}>

                <h1 className={styles.section} >
                    EVENTOS
                </h1>
                <div className={styles.linea}></div>

            </div>

            <section>
                <div className={styles.container} >
                    <div className="row">
                        <div className="col-12 col-sm-4">
                            <img src="https://ipmark.com/wp-content/uploads/eventos-de-marketing-2021.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                                    the cards content.</p>
                                <a href="Login" className="btn btn-primary" >Ver más</a>
                            </div>

                        </div>
                        <div className="col-12 col-sm-4">
                            <img src="https://ipmark.com/wp-content/uploads/eventos-de-marketing-2021.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                                    the cards content.</p>
                                <a href="Login" className="btn btn-primary" >Ver más</a>
                            </div>

                        </div>
                        <div className="col-12 col-sm-4">
                            <img src="https://ipmark.com/wp-content/uploads/eventos-de-marketing-2021.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title" >Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                                    the cards content.</p>
                                <a href="Login" className="btn btn-primary" >Ver más</a>
                            </div>

                        </div>
                        <div className="col-12 col-sm-4">
                            <img src="https://ipmark.com/wp-content/uploads/eventos-de-marketing-2021.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                                    the cards content.</p>
                                <a href="Login" className="btn btn-primary" >Ver más</a>
                            </div>

                        </div>
                        <div className="col-12 col-sm-4">
                            <img src="https://ipmark.com/wp-content/uploads/eventos-de-marketing-2021.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                                    the cards content.</p>
                                <a href="Login" className="btn btn-primary" >Ver más</a>
                            </div>

                        </div>
                        <div className="col-12 col-sm-4">
                            <img src="https://ipmark.com/wp-content/uploads/eventos-de-marketing-2021.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title" >Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                                    the cards content.</p>
                                <a href="Login" className="btn btn-primary" >Ver más</a>
                            </div>

                        </div>

                    </div>


                </div>
            </section>


            <div>
                <Grid container={12}>
                    <Grid xs={6}>
                        <h1 className={styles.infoeventosY}>
                            Puedes ver los eventos gratuitos por medio de nuestra página de YouTube
                        </h1>

                    </Grid>
                    <Grid xs={6}>
                        <iframe className={styles.videoyoutube} width="560" height="315" src="https://www.youtube.com/embed/icCB37Hyzv4"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>

                    </Grid>



                </Grid>
            </div>
        </div>

        </body>
    );
}
export default EventosNologin;