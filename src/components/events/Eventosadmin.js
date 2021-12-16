import React, {useEffect, useRef, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Eventlistadmin from "./Eventlistadmin";
import Eventformadmin from "../../components/Eventformadmin";
import styles from '../styles/style.module.css';
import Navbaradmin from "../../components/Navbaradmin";
import {Grid} from "@material-ui/core";
import Admin from "../../components/Admin";


function Eventosadmin() {
    const [event,setEvent]=useState({
        title:'',
        description:''

    })
    const[events,setEvents]=useState([])

    useEffect(()=>{
        const getEvents =()=>{
            fetch("https://backend-ifgf.herokuapp.com/api/events")
                .then(res => res.json())
                .then(res =>setEvents(res))
        }
        getEvents()

    },[])

    return(
        <div>
            <Navbaradmin/>

            <Grid container={12}>
                <Grid xs={2}>
                    <Admin/>
                </Grid>
                <Grid xs={10}>

        <h1  className={styles.formasdona}>EVENTOS</h1>

        <div className="container">

            <div className="row">
                <div className="col-7">
                    <Eventlistadmin events={events}/>
                </div>
                <div className="col-5">

                    <Eventformadmin event={event} setEvent={setEvent}/>

                </div>

            </div>



        </div>
                </Grid>
                </Grid>
        </div>





    )
}
export default Eventosadmin;
