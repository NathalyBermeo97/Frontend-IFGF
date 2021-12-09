
import React, { useRef, useState ,useEffect} from "react";
import {Button} from "antd";
//import { Button } from 'antd';
import styles from '../styles/style.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Grid} from "@material-ui/core";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Videoscards from "../components/Videoscards";


const Videos = ({}) => {

    const[videos,setVideos]=useState([])

    useEffect(()=>{
        const getVideos =()=>{
            fetch("https://backend-ifgf.herokuapp.com/api/videos")
                .then(res => res.json())
                .then(res =>setVideos(res))
        }
        getVideos()

    },[])


    return(
        <body className={styles.body} >
        <Header/>
        <Navbar/>

        <div className={styles.form}>

            <div className={styles.events}>

                <h1 className={styles.section} >
                    Videos
                </h1>
                <div className={styles.linea}></div>

            </div>

        </div>


        <div className="container" >

            <Videoscards videos={videos}/>
        </div>
        </body>





    );
};

export default (Videos);