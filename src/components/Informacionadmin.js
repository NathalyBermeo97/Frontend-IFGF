import React, {useEffect, useRef, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Eventlistadmin from "./Eventlistadmin";
import Eventformadmin from "../components/Eventformadmin";
import styles from '../styles/style.module.css';
import Informacionlistadmin from "./Informacionlistadmin";
import Informacionformadmin from "../components/Informacionformadmin";
import Navbaradmin from "../components/Navbaradmin";
import Admin from "../components/Admin";
import {Grid} from "@material-ui/core";
import Albumslistadmin from "./Albumslistadmin";
import Messageslistadmin from "./Messageslistadmin";

function Informacionadmin() {
    const [informacion,setInformacion]=useState({
        title:'',
        description:'',
        imgURL:''

    })
    const[informaciones,setInformaciones]=useState([])

    useEffect(()=>{
        const getEvents =()=>{
            fetch("https://backend-ifgf.herokuapp.com/api/news")
                .then(res => res.json())
                .then(res =>setInformaciones(res))
        }
        getEvents()

    },[])

    const [message,setMessage]=useState({
        title:'',
        description:'',
        imgURL:''

    })
    const[messages,setMessages]=useState([])

    useEffect(()=>{
        const getMessages =()=>{
            fetch("https://backend-ifgf.herokuapp.com/api/messages")
                .then(res => res.json())
                .then(res =>setMessages(res))
        }
        getMessages()

    },[])

    const [album,setAlbum]=useState({
        title:'',
        description:'',
        imgURL:''

    })
    const[albums,setAlbums]=useState([])

    useEffect(()=>{
        const getAlbums =()=>{
            fetch("https://backend-ifgf.herokuapp.com/api/albums")
                .then(res => res.json())
                .then(res =>setAlbums(res))
        }
        getAlbums()

    },[])

    return(
        <div>
            <Navbaradmin/>

            <Grid container={12}>
                <Grid xs={2}>
                    <Admin/>
                </Grid>
                <Grid xs={10}>
                    <h1  className={styles.formasdona}>INFORMACION GENERAL</h1>
                    <h1  className={styles.formasdona}>Noticias</h1>

                    <div className="container">

                        <div className="row">
                            <div className="col-7">
                                <Informacionlistadmin informaciones={informaciones}/>
                            </div>
                            <div className="col-5">

                                <Informacionformadmin informacion={informacion} setInformacion={setInformacion}/>

                            </div>

                        </div>
                        <h1  className={styles.formasdona}>Mensajes biblicos</h1>
                        <div className="row">
                            <div className="col-7">
                                <Messageslistadmin messages={messages}/>
                            </div>
                            
                        </div>
                        <h1  className={styles.formasdona}>Albums</h1>
                        <div className="row">
                            <div className="col-7">
                                <Albumslistadmin albums={albums}/>
                            </div>
                            
                        </div>



                    </div>
                </Grid>

            </Grid>



        </div>



    )
}
export default Informacionadmin;