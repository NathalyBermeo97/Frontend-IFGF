import React, { useRef, useState } from "react";
import {Button} from "antd";
//import { Button } from 'antd';
import styles from '../styles/style.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Grid, Link} from "@material-ui/core";
import Header from "./Header";
import Navbar from "./Navbar";
import Navbaradmin from "./Navbaradmin";


const MenuAdmin = () => {

    return (
        <div>
            <div className={styles.admin} >
                <Link href="/administrador/adminnews" className="list-group-item list-group-item-action">Noticias</Link>
                <Link href="/administrador/adminmessages" className="list-group-item list-group-item-action">Mensajes bíblicos</Link>
                <Link href="/administrador/adminalbums" className="list-group-item list-group-item-action">Albums</Link>
                <Link href="/administrador/adminevents" className="list-group-item list-group-item-action">Eventos</Link>
                <Link href="/administrador/adminvideos" className="list-group-item list-group-item-action">Videos</Link>
                <Link href="/administrador/admindonations" className="list-group-item list-group-item-action">Donaciones</Link>

            </div>
        </div>
    );
};
export default MenuAdmin;




