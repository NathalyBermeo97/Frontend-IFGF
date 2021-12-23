import React from "react";
import { Grid } from "@mui/material";
import styles from "../../styles/style.module.css";
import { Button } from "@material-ui/core";
import { DatePicker } from "antd";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Donacionropa = () => {
  return (
    <body className={styles.body}>
      <Navbar />

      <div className={styles.events}>
        <h1 className={styles.section}>DONACIÓN DE ROPA</h1>
        <div className={styles.linea}></div>
      </div>
      <Grid container={12}>
        <Grid xs={8}>
          <div className={styles.formasdona}>
            <Search />
          </div>
        </Grid>

        <Grid xs={4}>
          <div className={styles.formasdona}>
            <Filtro />
          </div>
        </Grid>
      </Grid>
      <Grid container={12}>
        <Grid xs={6}>
          <div className={styles.formasdona}>
            <div>
              <h4>Haz tu donación voluntaria de "ROPA".</h4>
            </div>

            <p>
              Hay personas que viven en absoluta pobreza que necesitan de tu
              colaboración, puedes ayudarlos donando cualquier tipo de ropa.
            </p>
            <div>
              <img
                className={styles.ubicacion}
                width="300px"
                src="https://www.caritas.org.mx/wp-content/uploads/2020/08/donde-donar-ropa-usada-1024x768.jpg"
              />
            </div>
          </div>
          <div className={styles.formasdona}>
            <div>
              <h4>Visita "NUESTRAS INSTALACIONES"</h4>
            </div>

            <p>
              Puedes visitar nuestras instalaciones para mayor información y
              para realizar cualquier tipo de pago o donación.
            </p>

            <div>
              <iframe
                className={styles.ubicacion}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7643285934228!2d-78.45924674973766!3d-0.2980747997814547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d599082e934a23%3A0xe9afca3fb0d1c771!2sIFGF%20Quito!5e0!3m2!1ses!2sec!4v1637617369934!5m2!1ses!2sec"
                width="300"
                height="150"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </Grid>
        <Grid xs={6} className={styles.borderdona}>
          <h2 className={styles.formasdona}>Formulario de donación</h2>
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
                  value="Mark"
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
                  value="Otto"
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

              <div className="col-md-6">
                <label htmlFor="validationCustom03" className="form-label">
                  Fecha del día de la entrega de la donación
                </label>
                <DatePicker />
              </div>

              <div className="col-md-6">
                <label htmlFor="validationCustom03" className="form-label">
                  Descripción del tipo de donación
                </label>
                <textarea
                  className="form-control"
                  id="floatingTextarea2"
                ></textarea>
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
export default Donacionropa;