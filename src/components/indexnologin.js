import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/style.module.css';

import CarouselEventos from "./CarouselEventos";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Grid} from "@material-ui/core";
import Carousel from "../components/Carousel"
import Header from "../components/Header";
import Headernologin from "../components/Headernologin";
import Navbar from "../components/Navbar";
import Navbarnologin from "../components/Navbarnologin";
import Noticias from "./News";
import Messages from "../components/Messages";
import Albums from "../components/Albums";
import React, {useEffect, useState} from "react";

const  Indexnologin =()=> {
    const[news,setNews]=useState([])

  useEffect(()=>{
    const getNews =()=>{
      fetch("https://backend-ifgf.herokuapp.com/api/news")
          .then(res => res.json())
          .then(res =>setNews(res))
    }
    getNews()

  },[])

  const[messages,setMessages]=useState([])

  useEffect(()=>{
    const getMessages =()=>{
      fetch("https://backend-ifgf.herokuapp.com/api/messages")
          .then(res => res.json())
          .then(res =>setMessages(res))
    }
    getMessages()

  },[])

  const[albums,setAlbums]=useState([])

  useEffect(()=>{
    const getAlbums =()=>{
      fetch("https://backend-ifgf.herokuapp.com/api/albums")
          .then(res => res.json())
          .then(res =>setAlbums(res))
    }
    getAlbums()

  },[])
    return (
        <body className={styles.body} >
        <Headernologin/>
        <Navbarnologin/>
        <Carousel/>

        <div className={styles.events}>

            <h1 className={styles.section}>
                Conoce nuestros eventos
            </h1>
            <div className={styles.linea}></div>

        </div>
        <CarouselEventos/>

        <div className={styles.news}>

            <h1 className={styles.section}>
                Entérate de nuestras noticias
            </h1>
            <div className={styles.linea}></div>

            <div className="container" >

            <Noticias news={news}/>
            </div>
            <div className="container" >

            <Messages messages={messages}/>
            </div>
            <div className="container" >

            <Albums albums={albums}/>
            </div>
        </div>
        <div className="container" >

            <div className="row">
                <div className="col-sm-6">
                    

                </div>
                <div className="col-sm-6">
                    <div className={styles.card}>
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.donaciones}>
            <Grid container={12}>


                <Grid xs={6}>
                    <h1>
                        Tu donación nos ayuda a llevar este mensaje al mundo
                    </h1>

                    <div className={styles.btndonaciones}>
                        <button type="button" className="btn btn-primary">Donar aquí</button>
                    </div>

                </Grid>
                <Grid xs={6}>
                    <h1>
                        <img className={styles.imagedonaciones} src="https://wwwhatsnew.com/wp-content/uploads/2018/01/PayPal-tarjeta-de-credito.jpg"/>
                    </h1>

                </Grid>

            </Grid>
        </div>

        </body>
    )
}
export default Indexnologin;
