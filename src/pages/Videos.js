import React from "react";
import {Grid} from "@mui/material";
import styles from '../styles/style.module.css';
import Search from "../components/Search";
import Filtroninos from "../components/Filtroninos";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

const Videos = () => {
    return (
        <body className={styles.body} >
        <Header/>
        <Navbar/>


        <div className={styles.events}>

            <h1 className={styles.section} >
                VIDEOS
            </h1>
            <div className={styles.linea}></div>
            <Grid container={12}>
                <Grid xs={8}>
                    <div className={styles.formasdona}>
                        <Search/>

                    </div>

                </Grid>



                <Grid xs={4} >
                    <div  className={styles.formasdona}>
                        <Filtroninos/>

                    </div>

                </Grid>

            </Grid>

            <section>
                <div className={styles.container} >
                    <div className="row">
                        <div className="col-12 col-sm-4">
                            <iframe className={styles.videospage} width="560" height="315" src="https://www.youtube.com/embed/NNNIAWPPDWw"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                            <div className={styles.titledona}>
                                <h5 className="card-title">Videos de la iglesia</h5>
                                <p className="card-text"></p>
                                <a href="VideosIglesia" className="btn btn-primary" >Ver más</a>
                            </div>

                        </div>
                        <div className="col-12 col-sm-4">
                            <iframe className={styles.videospage} width="560" height="315" src="https://www.youtube.com/embed/9IGTvRpGw3s"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                            <div className={styles.titledona}>
                                <h5 className="card-title">Videos para jóvenes</h5>
                                <p className="card-text"></p>
                                <a href="Videosjovenes" className="btn btn-primary" >Ver más</a>
                            </div>

                        </div>
                        <div className="col-12 col-sm-4">
                            <iframe className={styles.videospage} width="560" height="315" src="https://www.youtube.com/embed/AmwP1krioik"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                            <div className={styles.titledona}>
                                <h5 className="card-title" >Videos para niños</h5>
                                <p className="card-text"></p>
                                <a  href="Videosninos" className="btn btn-primary" >Ver más</a>
                            </div>

                        </div>
                    </div>
                </div>


            </section>

            </div>
        </body>




    )

}
export default Videos;