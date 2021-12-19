import React, { useState, useEffect, useRouter } from "react";
import styles from "../styles/Login.module.css";
import { Button, Grid } from "@material-ui/core";
import { Input } from "@material-ui/core";
import Axios from "axios";

const initialState = {
  form: {
    email: "",
    password: "",
  },
  error: false,
  errorMsg: "",
};

function LoginComponent() {
  const [state, setState] = useState(initialState);
  const router = useRouter();
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  const login = () => {
    Axios.post("https://backend-ifgf.herokuapp.com/api/auth/login", state.form)
      .then((response) => {
        console.log(response);
        if (response.data.token === "") {
          setState({
            error: true,
            errorMsg: response.data.message,
          });
        } else {
          setState({
            error: false,
          });
          localStorage.setItem("token", response.data.token);
          router.push("/");
        }
      })
      .catch((err) => {
        console.log("error", err);
        setState({
          error: true,
          errorMsg: "Error al conectar con la api",
        });
      });
  };

  return (
    <>
      <form
        className={styles.form}
        onSubmit={onSubmit}
      >
        <div className={styles.head}>
          <h1>BIENVENIDO A LA IGLESIA IFGF ECUADOR</h1>
          <h3>Iniciar sesión</h3>
        </div>

        <br />
        {state.error === true && (
          <div class="alert alert-danger" role="alert">
            <h4>{state.errorMsg}</h4>
          </div>
        )}

        <br />
        <div>
          <Input
            name="email"
            type="email"
            variant="outlined"
            placeholder="Email"
            onChange={onChange}
          />
        </div>
        <div>
          <Input
            name="password"
            type="password"
            variant="outlined"
            placeholder="Contraseña"
            onChange={onChange}
          />
        </div>

        <Grid container xs={12}>
          <Grid xs={6}>
            <Button variant="outlined" size="medium" onClick={login}>
              Ingresar
            </Button>
          </Grid>
          <Grid xs={6}>
            <Button href="indexnologin" variant="outlined" size="medium">
              Salir
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
export default LoginComponent;
