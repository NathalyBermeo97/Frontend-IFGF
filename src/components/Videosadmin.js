import React, {useEffect, useRef, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/style.module.css';
import Navbaradmin from "../components/Navbaradmin";
import {Grid} from "@material-ui/core";
import MenuAdmin from "./MenuAdmin";
import Videosformadmin from "../components/Videosformadmin";
import Videoslistadmin from "./Videoslistadmin";


function Videosadmin() {
    const [video,setVideo]=useState({
        title:'',
        description:''

    })
    const[videos,setVideos]=useState([])

    useEffect(()=>{
        const getEvents =()=>{
            fetch("https://backend-ifgf.herokuapp.com/api/videos")
                .then(res => res.json())
                .then(res =>setVideos(res))
        }
        getEvents()

    },[])

    return(
        <div>
            <Navbaradmin/>

            <Grid container={12}>
                <Grid xs={2}>
                    <MenuAdmin/>
                </Grid>
                <Grid xs={10}>

                    <h1  className={styles.formasdona}>Videos</h1>

                    <div className="container">

                        <div className="row">
                            <div className="col-7">
                                <Videoslistadmin videos={videos}/>
                            </div>
                            <div className="col-5">

                                <Videosformadmin video={video} setVideo={setVideo}/>

                            </div>

                        </div>



                    </div>
                </Grid>
            </Grid>
        </div>





    )
}
export default Videosadmin;