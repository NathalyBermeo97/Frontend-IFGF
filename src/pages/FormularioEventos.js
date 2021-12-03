//import { Button } from 'antd';
import styles from '../styles/style.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Grid} from "@material-ui/core";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import React from "react";


const FormularioEventos = () => {

    return (
        <body className={styles.body}>
        <Header/>
        <Navbar/>
            <h2 className={styles.formasdona}>
                Formulario de registro de eventos

            </h2>
            <div className={styles.formsDonaciones}>
                <form className="row g-3 needs-validation" noValidate >
                    <div className="col-md-6">
                        <label htmlFor="validationCustom01" className="form-label">Tema</label>
                        <input type="text" className="form-control" id="validationCustom01"  required/>
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="validationCustom02" className="form-label">Lugar</label>
                        <input type="text" className="form-control" id="validationCustom02"  required/>
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="validationCustom03" className="form-label">Dirección</label>
                        <input type="text" className="form-control" id="validationCustom03" required/>
                        <div className="invalid-feedback">
                            Please provide a valid city.
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="validationCustom03" className="form-label">Teléfono/Celular</label>
                        <input type="text" className="form-control" id="validationCustom03" required/>
                        <div className="invalid-feedback">
                            Please provide a valid city.
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="validationCustom03" className="form-label">Descripción del tipo de donación</label>
                        <textarea className="form-control"  id="floatingTextarea2"></textarea>


                    </div>

                    <div className="col-12">


                        <label htmlFor="formFile" className="form-label">Ingresa una imagen del evento</label>
                        <input className="form-control" type="file" id="formFile"/>
                    </div>
                    <div className="col-12">
                        <Button className="btn btn-primary" type="submit" href="Eventos">Enviar</Button>
                    </div>
                </form>


            </div>



        </body>
    )
}
export default FormularioEventos;