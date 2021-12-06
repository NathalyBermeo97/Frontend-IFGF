import React, {useState} from "react";
import { useForm } from "react-hook-form";
import styles from '../styles/Login.module.css'
import {Button, Grid} from "@material-ui/core";
import {Input} from "@material-ui/core";
import Axios from "axios";
import Link from 'next/link';


function LoginComponent(props){



    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const login = () => {
        Axios.post ("https://backend-ifgf.herokuapp.com/api/auth/login",{
            email:email,
            password:password,
        }).then((response)=>{
            console.log(response);
        });
    };

    return (
        <div>

            <form  className={styles.form}>
                <div className={styles.head}>
                    <h1>BIENVENIDO A LA IGLESIA IFGF ECUADOR</h1>
                    <h3>Iniciar sesión</h3>
                </div>

                <div>
                    <Input type="email" variant="outlined" placeholder="Email" onChange={(e)=>{ setEmail(e.target.value);}}
                    />

                </div>
                <div>
                    <Input type="password" variant="outlined" placeholder="Contraseña" onChange={(e)=>{ setPassword(e.target.value);}}
                    />

                </div>


                <Grid container xs={12}>
                    <Grid  xs={6}>
                        <Button variant="outlined" size="medium" onClick={login} >
                            Ingresar
                        </Button>
                    </Grid>
                    <Grid  xs={6}>
                        <Button href="indexnologin" variant="outlined" size="medium" >
                            Salir
                        </Button>
                    </Grid>

                </Grid>

            </form>
        </div>
    );
}
export default LoginComponent;
