import React, { useRef, useState ,useEffect} from "react";
import styles from '../../styles/style.module.css';
import Navbar from "../../components/Navbar";
import Eventoscards from "../../components/Eventoscards";
import Footer from "../../components/Footer";

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
        <Footer/>
        </body>
    );
};

export default (Events);
