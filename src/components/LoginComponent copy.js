import React, {useState, useEffect} from "react";
import {useRouter} from 'next/router';
import { useForm } from "react-hook-form";
import styles from '../styles/Login.module.css'
import {Button, Grid} from "@material-ui/core";
import {Input} from "@material-ui/core";
import Axios from "axios";


const LoginPage =() => {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [message, setMessage] =useState("") ;
    const [error, setError ]=useState(false);

    const login = () => {
        Axios.post ("https://backend-ifgf.herokuapp.com/api/auth/login",{
            email:email,
            password:password,
        }).then((response)=>{
            console.log(response)
            if(response.status === 200 ){
                token = response.data.token
                role = response.data.role
                console.log(token)
            }else{
                setError(true);
                setMessage(response.data.message);
            }
            
        }).catch((err) => {
            console.log('error', err);
        })
    };


    return (
        <div>

            <form  className={styles.form}>
                <div className={styles.head}>
                    <h1>BIENVENIDO A LA IGLESIA IFGF ECUADOR</h1>
                    <h3>Iniciar sesión</h3>
                </div>

                <br/>
                {error === true &&
                    <div class="alert alert-danger" role="alert">
                        <h4>{message}</h4>
                    </div>
                }
                    
                <br/>    
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
                        <Button variant="outlined" size="medium" onClick={login}>
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
export default LoginPage;