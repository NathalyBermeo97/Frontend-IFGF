import React, { useState } from "react";
import styles from '../styles/style.module.css';
import {Button} from "@material-ui/core";

const FormularioDonaciones = () => {
    return(
        <div className={styles.formsDonaciones}>
            <form className="row g-3 needs-validation" noValidate>
                <div className="col-md-6">
                    <label htmlFor="validationCustom01" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="validationCustom01" value="Mark" required/>
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="validationCustom02" value="Otto" required/>
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustomUsername" className="form-label">Email</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" className="form-control" id="validationCustomUsername"
                               aria-describedby="inputGroupPrepend" required/>
                        <div className="invalid-feedback">
                            Please choose a username.
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom03" className="form-label">Ciudad</label>
                    <input type="text" className="form-control" id="validationCustom03" required/>
                    <div className="invalid-feedback">
                        Please provide a valid city.
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


                <div className="col-12">


                    <label htmlFor="formFile" className="form-label">Ingresa una imagen con el comprobante de pago</label>
                    <input className="form-control" type="file" id="formFile"/>
                </div>
                <div className="col-12">
                    <Button className="btn btn-primary" type="submit" href="Donaciones">Enviar</Button>
                </div>
            </form>


        </div>

    )
}
export default FormularioDonaciones;


