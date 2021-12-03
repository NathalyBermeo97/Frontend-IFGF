import React from "react";
import {Grid} from "@mui/material";
import styles from "../styles/style.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Contacts = () => {
    return (

        <div>
            <div className={styles.events}>

                <h1 className={styles.section}>
                    Contáctanos
                </h1>
                <div className={styles.linea}></div>



            </div>
    <Grid container={12}>



            <Grid xs={6} className="cardContact">

                <div className="card-header">Dirección</div>
                <div className="card-body">
                    <p className="card-text">
                        12437 Lewis St. Suite #102
                        Garden Grove, CA 92840
                        Tel (+1) 714 750 8400
                        Fax (+1) 714 750 8402</p>
                </div>

            </Grid>

            <Grid xs={6} className="cardContact">

                <div className="card-header">Llámanos</div>
                <div className="card-body">
                    <p className="card-text">Telf 022 656 986</p>
                    <p className="card-text">Cel 0956434535</p>
                </div>

            </Grid>

        </Grid>
        </div>

    )

}
export default Contacts;