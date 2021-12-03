import React, {useState} from "react";
import { useForm } from "react-hook-form";
import styles from '../styles/Registro.module.css'
import {Button, Grid, Input} from "@material-ui/core";


const RegisterPage =()=>{
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [result,setResult]=useState("");
    const onSubmit = (formData) =>setResult(JSON.stringify(formData));


    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}  className={styles.form}>
                <div className={styles.head}>
                    <h1>BIENVENIDO A LA IGLESIA IFGF ECUADOR</h1>
                    <h3>Crea una cuenta</h3>
                </div>
                <div>
                    <Input {...register("firstName", { required: true })} placeholder="Nombre" variant="outlined"/>
                    {errors.firstName?.type === 'required' && "Este campo obligatorio"}
                </div>
                <div>
                    <Input {...register("lastName", { required: true })} placeholder="Apellido" variant="outlined"/>
                    {errors.lastName?.type === 'required' && "Este campo obligatorio"}
                </div>
                <div>
                    <Input type="email"
                           {...register("email", { required: true })} placeholder="Email" variant="outlined"
                    />
                    {errors.email?.type === 'required' && "Este campo obligatorio"}
                </div>
                <div>
                    <Input type="password"
                           {...register("password", { required: true })} placeholder="Contraseña" variant="outlined"
                    />
                    {errors.password?.type === 'required' && "Este campo obligatorio"}
                </div>


                <p>{result}</p>

                <Grid container xs={12}>
                    <Grid  xs={6}>
                        <Button href="/" type={"submit"} variant="outlined" size="medium" >
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
export default RegisterPage;