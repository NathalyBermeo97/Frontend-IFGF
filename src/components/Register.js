import React, {useState} from "react";
import { useForm } from "react-hook-form";
import styles from '../styles/Registro.module.css'
import {Button, Grid, Input} from "@material-ui/core"
import Alert from '@mui/material/Alert';
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';


const Register =()=>{

    const [usernameReg,setUsernameReg]=useState("");
    const [userlastnameReg,setUserlastnameReg]=useState("");
    const [useremailReg,setUseremailReg]=useState("");
    const [userpasswordReg,setUserpasswordReg]=useState("");
    const [res, setRes]=useState("");

    const register = () => {
        Axios.post ("https://backend-ifgf.herokuapp.com/api/auth/register",{
            name:usernameReg,
            lastname:userlastnameReg,
            email:useremailReg,
            password:userpasswordReg,
        }).then((response)=>{
            console.log(response)
        });
    };

    return (
        <div>

            <form  className={styles.form}>
                <div className={styles.head}>
                    <h1>BIENVENIDO A LA IGLESIA IFGF ECUADOR</h1>
                    <h3>Crea una cuenta</h3>
                </div>
                <div>
                    <Input  placeholder="Nombre" variant="outlined" onChange={(e)=>{ setUsernameReg(e.target.value);}}/>

                </div>

                <div>
                    <Input  placeholder="Apellido" variant="outlined" onChange={(e)=>{ setUserlastnameReg(e.target.value);}}/>

                </div>
                <div>
                    <Input type="email"
                           placeholder="Email" variant="outlined" onChange={(e)=>{ setUseremailReg(e.target.value);}}/>

                </div>
                <div>
                    <Input type="password"
                           placeholder="Contraseña" variant="outlined" onChange={(e)=>{ setUserpasswordReg(e.target.value);}}/>

                </div>

                <Grid container xs={12}>
                    <Grid  xs={6}>
                        <Button  variant="outlined" size="medium" onClick={register}>
                            Registrarse
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
export default Register;