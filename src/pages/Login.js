import React, {useState} from "react";
import { useForm } from "react-hook-form";
import styles from '../styles/Login.module.css'
import {Button, Grid} from "@material-ui/core";
import {Input} from "@material-ui/core";


const LoginPage =() => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [result,setResult]=useState("");
    const onSubmit = (formData) =>setResult(JSON.stringify(formData));


    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}  className={styles.form}>
                <div className={styles.head}>
                    <h1>BIENVENIDO A LA IGLESIA IFGF ECUADOR</h1>
                    <h3>Iniciar sesión</h3>
                </div>

                <div>
                    <Input type="email" variant="outlined"
                           {...register("email", { required: true })} placeholder="Email"
                    />
                    {errors.email?.type === 'required' && "Este campo obligatorio"}
                </div>
                <div>
                    <Input type="password" variant="outlined"
                           {...register("password", { required: true })} placeholder="Contraseña"
                    />
                    {errors.password?.type === 'required' && "Este campo obligatorio"}
                </div>

                <p>{result}</p>

                <Grid container xs={12}>
                    <Grid  xs={6}>
                        <Button href="/" variant="outlined" size="medium" >
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