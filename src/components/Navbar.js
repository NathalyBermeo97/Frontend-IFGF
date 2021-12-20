import React from "react";
import Link from "next/link";
import styles from "../styles/navbar.module.css";
import { Button, Grid } from "@mui/material";
import useUser, { USER_STATES } from "../hooks/useUser";

const Navbar = () => {
  const { user, isLogged, logout } = useUser();
  const handleLogout = () => {
    logout();
  };
  return (
    <nav
      className="navbar navbar-expand-md  navbar-light bg-light  border-3 border-bottom border-info"
      style={{ height: "60px" }}
    >
      <div className="container-fluid">
        <img
          src=" https://play-lh.googleusercontent.com/aOXfWiUukAMFGBqwJ59PrFh4EDIPi1XnH2GQFyLmKDsXLh2qq-ekzTuNlKZq3M7Hyoc"
          className={styles.image}
        />
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#MenuNavegacion"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="MenuNavegacion" className="collapse navbar-collapse">
          <Link href="/">
            <a className="nav-link active" aria-current="page">
              Inicio
            </a>
          </Link>
          <Link href="/eventos">
            <a className="nav-link">Eventos</a>
          </Link>
          <Link className="nav-link" href="/donaciones">
            <a className="nav-link">Donaciones</a>
          </Link>
          <Link className="nav-link" href="/videos">
            <a className="nav-link">Videos</a>
          </Link>
          <Link className="nav-link" href="/juegos">
            <a className="nav-link">Juegos</a>
          </Link>
        </div>
      </div>

      <Grid xs={2}>
        {isLogged ? (
          <p>
            {user.name}
            <button onClick={() => handleLogout()}>LOGOUT</button>
          </p>
        ) : user === USER_STATES.NOT_KNOWN ? (
          "cargando..."
        ) : (
          <Link href="/login">Iniciar Sesión</Link>
        )}
      </Grid>
    </nav>
  );
};
export default Navbar;
