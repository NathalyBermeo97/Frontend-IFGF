import React, { useRef, useState } from "react";
import {Button} from "antd";
//import { Button } from 'antd';
import styles from '../styles/style.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Grid, Link} from "@material-ui/core";
import Header from "./Header";
import Navbar from "./Navbar";
import Navbaradmin from "./Navbaradmin";


const Admin = () => {

    return (
        <div>
            <div className={styles.admin} >
                <Link href="Informacionadmin" className="list-group-item list-group-item-action">Informacion general</Link>
                <Link href="Eventosadmin" className="list-group-item list-group-item-action">Eventos</Link>
                <Link href="Donacioneslistadmin" className="list-group-item list-group-item-action">Donaciones</Link>
                <Link href="Videosadmin" className="list-group-item list-group-item-action">Videos</Link>
                <Link href="#" className="list-group-item list-group-item-action">Juegos</Link>
                <Link href="indexnologin" className="list-group-item list-group-item-action">Salir</Link>
            </div>
        </div>
    );
};
export default Admin;




