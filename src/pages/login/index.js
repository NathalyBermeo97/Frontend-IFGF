import React, { useState } from "react";
import styles from "./styles.module.css";
import { Button } from "@material-ui/core";
import { Input } from "@material-ui/core";
import { useRouter } from "next/router";
import Link from "next/link";
import { withPublic } from "../../hocs/withPublic";
import Context, { useAuth } from "../../context/AuthContext";



const LoginPage = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (

    <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
      <div className={styles.head}>
        <h1>BIENVENIDO A LA IGLESIA IFGF ECUADOR</h1>
        <h3>Iniciar sesión</h3>
      </div>
      {error === true && (
        <div class="alert alert-danger" role="alert">
          <h4>{message}</h4>
        </div>
      )}
      <Input
        type="email"
        variant="outlined"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <Input
        type="password"
        variant="outlined"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <div className={styles.loginButtons}>
        <Button variant="outlined" size="medium" type="submit">
          Ingresar
        </Button>

        <Button
          variant="outlined"
          size="medium"
          type="submit"
          onClick={() => router.push('/')}
        >
          Salir
        </Button>
      </div>
      <Link href="/register">
        <p className={styles.createAccount}>¿No tiene una cuenta?</p>
      </Link>
    </form>
  );
};
export default withPublic(LoginPage, '/admin');
