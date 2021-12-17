import React, {useEffect, useRef, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import styles from '../styles/style.module.css';
import Donacioneslistadmin from "./Donacioneslistadmin";
import Navbaradmin from "../../components/Navbaradmin";
import {Grid} from "@material-ui/core";
import MenuAdmin from "../MenuAdmin";


function Donacionesadmin() {
    const [donation,setDonation]=useState({
        name:'',
        lastName:'',
        description:'',
        type:'',
        delivery:'',
        direction:'',
        dateDelivery:''


    })
    const[donations,setDonations]=useState([])

    useEffect(()=>{
        const getDonations =()=>{
            fetch("https://backend-ifgf.herokuapp.com/api/donations")
                .then(res => res.json())
                .then(res =>setDonations(res))
        }
        getDonations()

    },[])

    return(
        <div>
            <div>


            <h1  className={styles.formasdona}>Donaciones</h1>

            <div className="container">

                <div className="row">
                    <div className="col-7">
                        <Donacioneslistadmin donations={donations}/>
                    </div>
                    <div className="col-5">



                    </div>

                </div>

            </div>



           </div>
        </div>

    )
}
export default Donacionesadmin;
