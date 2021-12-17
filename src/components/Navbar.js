import React from "react";
import { Link } from "@material-ui/core";
import RouterLink from "next/link";
import { Button, Grid } from "@mui/material";
import useUser, { USER_STATES } from "../hooks/useUser";

const Navbar = () => {
  const { user, isLogged, logout } = useUser();
  const handleLogout = () => {
    logout()
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Grid container={12}>
        <Grid xs={10}>
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <RouterLink href="/">
                  <Link className="nav-link active" aria-current="page">
                    Inicio
                  </Link>
                </RouterLink>
                <RouterLink href="Eventos">
                  <Link className="nav-link">Eventos</Link>
                </RouterLink>
                <Link className="nav-link" href="Donaciones">
                  Donaciones
                </Link>
                <Link className="nav-link" href="Videos">
                  Videos
                </Link>
                <Link className="nav-link" href="Juegos">
                  Juegos
                </Link>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>

      <Grid xs={2}>
          {isLogged ? (
            <p>
                {user.name}
                <button onClick={() => handleLogout()}>LOGOUT</button>
            </p> 
          ) : user === USER_STATES.NOT_KNOWN ? (
            "cargando..."
          ) : (
            <RouterLink href="/login">Iniciar Sesión</RouterLink>
          )}
      </Grid>
    </nav>
  );
};
export default Navbar;
