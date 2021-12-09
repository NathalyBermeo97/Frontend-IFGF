import React, {useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import styles from '../styles/Login.module.css'
import {Button, Grid} from "@material-ui/core";
import {Input} from "@material-ui/core";
import Axios from "axios";


class LoginComponent extends React.Component {
   

    constructor (props){
        super(props);
    }

    state={
        form:{
            "email":"",
            "password":""
        },
        error:false,
        errorMsg:""
    }

    onSubmit = e =>{
        e.preventDefault();
    }

    onChange = async e =>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }


    login = () => {
        Axios.post ("https://backend-ifgf.herokuapp.com/api/auth/login",this.state.form).then(response=>{
            console.log(response);
            if(response.data.token === "" ){
                this.setState({
                    error: true,
                    errorMsg: response.data.message
                })
            }else{
                this.setState({
                    error: false
                })
                localStorage.setItem("token",response.data.token)
                this.router.push('/')
            }
        }).catch((err) => {
            console.log('error', err);
            this.setState({
                error: true,
                errorMsg: "Error al conectar con la api"
            })
        })
    };

render(){
    return (
        <React.Fragment>

            <form  className={styles.form} onSubmit={this.onSubmit}>
                <div className={styles.head}>
                    <h1>BIENVENIDO A LA IGLESIA IFGF ECUADOR</h1>
                    <h3>Iniciar sesión</h3>
                </div>

                <br/>
                {this.state.error === true &&
                    <div class="alert alert-danger" role="alert">
                        <h4>{this.state.errorMsg}</h4>
                    </div>
                }

                <br/>
                <div>
                    <Input name="email" type="email" variant="outlined" placeholder="Email" onChange={this.onChange}/>

                </div>
                <div>
                    <Input name="password" type="password" variant="outlined" placeholder="Contraseña" onChange={this.onChange}/>

                </div>


                <Grid container xs={12}>
                    <Grid  xs={6}>
                        <Button variant="outlined" size="medium" onClick={this.login}>
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
        </React.Fragment>
    );
}

}
export default LoginComponent;