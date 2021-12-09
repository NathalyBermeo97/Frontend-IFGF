import React, {useState, useEffect, useCallback} from "react";
import {useRouter} from 'next/router';
import { useForm } from "react-hook-form";
import styles from '../styles/Login.module.css'
import {Button, Grid} from "@material-ui/core";
import {Input} from "@material-ui/core";
import Axios from "axios";


export default function LoginComponent(){

    const router = useRouter()

    const [state, setState] = useState({
        form:{
            "email":"",
            "password":""
        },
        error:false,
        errorMsg:""
    })

    const onChange = async e =>{
        await setState({
            form:{
                ...state.form,
                [e.target.name]: e.target.value
            }
        })
    }
    
    const handleSubmit = useCallback((e) =>{
        e.preventDefault()

        Axios.post ("https://backend-ifgf.herokuapp.com/api/auth/login",state.form).then(response=>{
            console.log(response);
            if(response.data.token === "" ){
                setState({
                    error: true,
                    errorMsg: response.data.message
                })
            }else{
                setState({
                    error: false
                })
                localStorage.setItem("token",response.data.token)
                router.push("/")
            }
        })
    }, [])

    useEffect(() => {
        router.prefetch('/')
    }, [])


    return (
        <>

            <form  className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.head}>
                    <h1>BIENVENIDO A LA IGLESIA IFGF ECUADOR</h1>
                    <h3>Iniciar sesión</h3>
                </div>
   
                <div>
                    <Input type="email" variant="outlined" placeholder="Email" onChange={onChange}
                    />

                </div>
                <div>
                    <Input type="password" variant="outlined" placeholder="Contraseña" onChange={onChange}
                    />

                </div>


                <Grid container xs={12}>
                    <Grid  xs={6}>
                        <Button variant="outlined" size="medium" type="submit">
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
        </>
    );
}