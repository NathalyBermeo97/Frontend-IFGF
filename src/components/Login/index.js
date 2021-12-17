import React, { useState, useEffect } from "react";
import styles from "../styles/Login.module.css";
import { Button, Grid } from "@material-ui/core";
import { Input } from "@material-ui/core";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div>
      <form className={styles.form} handleSubmit={(e) => handleSubmit(e)}>
        <div className={styles.head}>
          <h1>BIENVENIDO A LA IGLESIA IFGF ECUADOR</h1>
          <h3>Iniciar sesión</h3>
        </div>

        <br />
        {error === true && (
          <div class="alert alert-danger" role="alert">
            <h4>{message}</h4>
          </div>
        )}

        <br />
        <div>
          <Input
            type="email"
            variant="outlined"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <Input
            type="password"
            variant="outlined"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <button type='submit'>Ingresar</button>
        <button type='submit'>borrar</button>
      </form>
    </div>
  );
};
export default LoginPage;
