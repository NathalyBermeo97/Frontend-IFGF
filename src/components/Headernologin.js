import React from "react";
import { Grid} from "@mui/material";
import {Button} from "@material-ui/core";
import styles from '../styles/style.module.css';


const Headernologin = () => {
    return(
        <nav className="navbar navbar-light bg-white">

            <Grid container xs={12} >
                <Grid xs={3} className="btn-login">
                    <form className="container-fluid ">
                        <Button variant="disableElevation" href="Registro">
                            Registro
                        </Button>

                        <Button variant="disableElevation" href="LoginComponent">
                            Inicio de sesion
                        </Button>
                    </form>
                </Grid>
                <Grid xs={5}>

                    <img className={styles.image} src="https://lh3.googleusercontent.com/p/AF1QipNSyoM12XEx1Q9GMJDEb_-_CR5uw89PrMTgMxb_=s1280-p-no-v1"/>
                    <h1 className={styles.name}>
                        IGLESIA IFGF ECUADOR
                    </h1>

                </Grid>
                <Grid xs={2}>


                </Grid>





            </Grid>
        </nav>
    )


}
export default Headernologin;