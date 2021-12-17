import React, { useRef, useState ,useEffect} from "react";
import {Button} from "antd";
//import { Button } from 'antd';
import styles from '../../styles/style.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Grid} from "@material-ui/core";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Eventoscards from "../../components/Eventoscards";

const Events = ({}) => {

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

        </div>


        <div className="container" >

            <Eventoscards events={events}/>
        </div>
        </body>





    );
};

export default (Events);
