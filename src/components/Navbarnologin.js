import React from 'react';
import {Link} from "@material-ui/core";

const Navbarnologin = () => {
    return(

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" href="/">Inicio</Link>
                        <Link className="nav-link" href="EventosNologin">Eventos</Link>
                        <Link className="nav-link" href="Donacionesnologin">Donaciones</Link>
                        <Link className="nav-link" href="Videosnologin">Videos</Link>
                        <Link className="nav-link" href="Juegosnologin">Juegos</Link>

                    </div>
                </div>
            </div>
        </nav>
    );
}
export default Navbarnologin;