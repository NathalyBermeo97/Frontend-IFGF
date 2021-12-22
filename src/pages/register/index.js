import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { Button, Grid } from "@material-ui/core";
import { Input } from "@material-ui/core";
import useUser from "../../hooks/useUser";
import { useRouter } from "next/router";
import Link from "next/link";
import { SERVER_RESPONSE } from "../../constans/inidex";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [roles, setRoles] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const {register} = useUser()

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log({name, lastName, email, password, roles})
    const response = await register({name, lastName, email, password, roles})
    if(response.data.message === SERVER_RESPONSE.SUCCESFUL_USER_REGISTRATION){
        router.push('/login')
    }
  }

  return (
    <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
      <div className={styles.head}>
        <h1>BIENVENIDO A LA IGLESIA IFGF ECUADOR</h1>
        <h3>Registrarse</h3>
      </div>
      {error === true && (
        <div className="alert alert-danger" role="alert">
          <h4>{message}</h4>
        </div>
      )}
      <div className={styles.registerInputs}>
        <Input
          type="text"
          variant="outlined"
          placeholder="Nombre"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Input
          type="text"
          variant="outlined"
          placeholder="Apellido"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <Input
          type="text"
          variant="outlined"
          placeholder="Rol"
          value={roles}
          onChange={(e) => {
            setRoles([e.target.value]);
          }}
        />
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
      </div>
      <div className={styles.registerButtons}>
        <Button variant="outlined" size="medium" type="submit">
          Registrarse
        </Button>

        <Button
          variant="outlined"
          size="medium"
          type="submit"
        >
          Salir
        </Button>
      </div>
      <Link href="/login">
        <p className={styles.createAccount}>¿Ya tiene una cuenta?</p>
      </Link>
    </form>
  );
};

export default RegisterPage;
