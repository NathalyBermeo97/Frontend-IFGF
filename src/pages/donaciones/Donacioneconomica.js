import React from "react";
import { Grid } from "@mui/material";
import styles from "../../styles/style.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { withPrivate } from "../../hocs/withPrivate";

const Donacioneconomica = () => {
  return (
    <body className={styles.body}>
      <Navbar />
      <div className={styles.events}>
        <h1 className={styles.section}>DONACIÓN ECONÓMICA</h1>
        <div className={styles.linea}></div>
      </div>
      <Grid container={12}>
        <Grid xs={6}>
          <div className={styles.formasdona}>
            <div>
              <h4>Haz tu donación a través de una "TRANSFERENCIA BANCARIA".</h4>
            </div>

            <p>
              En el portal web de tu Banco puedes crearnos como BENEFICIARIO y
              colaborar con nuestra obra de evangelización mediante una
              transferencia bancaria.
            </p>
          </div>
          <div className={styles.formasdona}>
            <h4>INFORMACIÓN PARA SUS DONACIONES</h4>
            <p>Puedes donar en cualquiera de estos establecimientos.</p>

            <div>
              <Grid container={12}>
                <Grid xs={4}>
                  <img
                    className={styles.imagedonainfo}
                    src="https://www.bolsadequito.com/images/2018/06/05/LOGO-BANCO-PICHINCHA-min.jpg"
                    alt="..."
                  />

                  <p className={styles.bancos}>Cuenta corriente</p>
                  <p className={styles.bancos}>17265180</p>
                </Grid>
                <Grid xs={4}>
                  <img
                    className={styles.imagedonainfo}
                    src="https://www.edina.com.ec/logos/1210100060-361106.jpg"
                    alt="..."
                  />
                  <p className={styles.bancos}>Cuenta corriente</p>
                  <p className={styles.bancos}>17265180</p>
                </Grid>
                <Grid xs={4}>
                  <img
                    className={styles.imagedonainfo}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsPLsZGquk2osozjQNw2ZJSMZUkUuCpFbR9FOJk5ztCMCVEVuY12sKBrgQBapkhU0wzLs&usqp=CAU"
                    alt="..."
                  />
                  <p className={styles.bancos}>Cuenta corriente</p>
                  <p className={styles.bancos}>17265180</p>
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>
        <Grid xs={6} className={styles.borderdona}>
          <h2 className={styles.formasdona}>Formulario de comprobación</h2>
          <div className={styles.formsDonaciones}>
            <form className="row g-3 needs-validation" noValidate>
              <div className="col-md-6">
                <label htmlFor="validationCustom01" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom01"
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col-md-6">
                <label htmlFor="validationCustom02" className="form-label">
                  Apellido
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom02"
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col-md-6">
                <label
                  htmlFor="validationCustomUsername"
                  className="form-label"
                >
                  Email
                </label>
                <div className="input-group has-validation">
                  <span className="input-group-text" id="inputGroupPrepend">
                    @
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustomUsername"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <div className="invalid-feedback">
                    Please choose a username.
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="validationCustom03" className="form-label">
                  Ciudad
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom03"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid city.
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="validationCustom03" className="form-label">
                  Dirección
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom03"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid city.
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="validationCustom03" className="form-label">
                  Teléfono/Celular
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom03"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid city.
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="formFile" className="form-label">
                  Ingresa una imagen con el comprobante de pago
                </label>
                <input className="form-control" type="file" id="formFile" />
              </div>
              <div className="col-12">
                <Button
                  className="btn btn-primary"
                  type="submit"
                  href="Donaciones"
                >
                  Enviar
                </Button>
              </div>
            </form>
          </div>
        </Grid>
      </Grid>
      <Footer />
    </body>
  );
};
export default withPrivate(Donacioneconomica);
