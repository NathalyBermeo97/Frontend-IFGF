import React, {useEffect, useRef, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/listas.module.css';
import Navbaradmin from "../../components/Navbaradmin";
import {Grid} from "@material-ui/core";
import Admin from "../../components/Admin";
const url = "https://backend-ifgf.herokuapp.com/";
function Donacioneslistadmin({donations}) {

    return(
        <>

        <div className={styles.body}>
            <Navbaradmin/>

            <Grid container={12}>
                <Grid xs={2}>
                    <Admin/>
                </Grid>
                <Grid xs={1}>

                </Grid>

                <Grid xs={7}>

            <h1>
                Lista de donaciones
            </h1>

            <div className={styles.card}>
            <table className="table">
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Descripción</th>
                    <th>Tipo</th>
                    <th>Delivery</th>
                    <th>Direccion</th>
                    <th>Fecha</th>
                    <th>imagen</th>


                </tr>

                </thead>
                <tbody>

            {donations.map(donation =>(
                <tr key={donation.id}>
                    <th>{donation.name}</th>
                    <th>{donation.lastName}</th>
                    <th>{donation.description}</th>
                    <th>{donation.type}</th>
                    <th>{donation.delivery}</th>
                    <th>{donation.direction}</th>
                    <th>{donation.dateDelivery}</th>
                    <th><img src={url+donation.imgURL} width={210} height={170}  justifyContent="center"/></th>

                </tr>

            ))}
                </tbody>
            </table>
            </div>
                </Grid>
            </Grid>

            </div>
        </>
        

    )

}export default Donacioneslistadmin;

export async function getStaticProps(){
    const response = await fetch ("https://backend-ifgf.herokuapp.com/api/donations")
    const data= await response.json()
    console.log(data)

    return{
        props:{
            donations:data,
        },
    }
}
