
import React, { useRef, useState } from "react";
import {Button} from "antd";
//import { Button } from 'antd';
import styles from '../styles/style.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Grid} from "@material-ui/core";
import Header from "../components/Header";
import Navbar from "../components/Navbar";


const Events = () => {

    return (
        <body className={styles.body} >
        <Header/>
        <Navbar/>

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
                                <a href="InfoEvento" className="btn btn-primary" >Ver más</a>
                            </div>

                        </div>
                        <div className="col-12 col-sm-4">
                            <img src="https://ipmark.com/wp-content/uploads/eventos-de-marketing-2021.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                                    the cards content.</p>
                                <a href="LoginComponent" className="btn btn-primary" >Ver más</a>
                            </div>

                        </div>
                        <div className="col-12 col-sm-4">

                            <img src="https://ipmark.com/wp-content/uploads/eventos-de-marketing-2021.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title" >Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                                    the cards content.</p>
                                <a href="LoginComponent" className="btn btn-primary" >Ver más</a>
                            </div>

                        </div>
                        <div className="col-12 col-sm-4">
                            <img src="https://ipmark.com/wp-content/uploads/eventos-de-marketing-2021.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                                    the cards content.</p>
                                <a href="LoginComponent" className="btn btn-primary" >Ver más</a>
                            </div>

                        </div>
                        <div className="col-12 col-sm-4">
                            <img src="https://ipmark.com/wp-content/uploads/eventos-de-marketing-2021.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                                    the cards content.</p>
                                <a href="LoginComponent" className="btn btn-primary" >Ver más</a>
                            </div>

                        </div>
                        <div className="col-12 col-sm-4">
                            <img src="https://ipmark.com/wp-content/uploads/eventos-de-marketing-2021.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title" >Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                                    the cards content.</p>
                                <a href="LoginComponent" className="btn btn-primary" >Ver más</a>
                            </div>

                        </div>

                    </div>


                </div>
            </section>

            <h3 className={styles.formasdona}>
                Mis eventos:
            </h3>



        </div>
        </body>
    );
}
export default Events;
