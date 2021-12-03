import React from 'react';
import {Link} from "@material-ui/core";
import {Button, Grid} from "@mui/material";

const Navbar = () => {
    return(

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Grid container={12}>
                <Grid xs={10}>
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link className="nav-link active" aria-current="page" href="/">Inicio</Link>
                                <Link className="nav-link" href="Eventos">Eventos</Link>
                                <Link className="nav-link" href="Donaciones">Donaciones</Link>
                                <Link className="nav-link" href="Videos">Videos</Link>
                                <Link className="nav-link" href="Juegos">Juegos</Link>

                            </div>
                        </div>
                    </div>

                </Grid>

            </Grid>

            <Grid xs={2}>
                <button type="button" className="btn btn-light">Nathaly Bermeo</button>
                <a className="btn btn-primary" href="indexnologin" role="button">Salir</a>

            </Grid>
        </nav>
    );
}
export default Navbar;