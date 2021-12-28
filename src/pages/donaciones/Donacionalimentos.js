import React from "react";
import styles from "../../styles/style.module.css";
import { Controller, useForm } from "react-hook-form";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Donation from "../../api/donation";
import swal from "sweetalert"

const schema = yup.object().shape({
  description: yup.string().required("Ingrese una descripción de la donación"),
  type: yup
    .string()
    .required("Ingrese el tipo de donación (comida,dinero o ropa)"),
  delivery: yup
    .string()
    .required(
      "Especifique si la donación realizada es a domicilio o prefiere llevar a la iglesia"
    ),
  direction: yup.string().required("Ingrese su dirección"),
});

const Donacionalimentos = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    register,
  } = useForm({
    resolver: yupResolver(schema),
  });



  const onSubmit = async (values) => {
    console.log("values", values);

    const formData = new FormData();

    formData.append("description", values.description);
    formData.append("type", values.type);
    formData.append("delivery", values.delivery);
    formData.append("direction", values.direction);
    formData.append("imgURL", values.imgURL);
    const response = await Donation.create(formData);
    console.log("response", response);
  };

  return (
    <body className={styles.body}>
      <Navbar />

      <div className={styles.events}>
        <h1 className={styles.section}>DONACIÓN DE ALIMENTOS</h1>
        <div className={styles.linea}></div>
      </div>
      <Container>
        <Row>
          <Col xs={6}>
            <div className={styles.formasdona}>
              <div>
                <h4>Haz tu donación voluntaria de ALIMENTOS </h4>
              </div>

              <p>
                Hay personas que viven en absoluta pobreza que necesitan de tu
                colaboración, puedes ayudarlos donando cualquier tipo de
                alimento.
              </p>
              <div>
                <img
                  className={styles.ubicacion}
                  width="300px"
                  src="https://st.depositphotos.com/1177973/4836/i/600/depositphotos_48368247-stock-photo-volunteers-with-donation-box-with.jpg"
                />
              </div>
            </div>
            <div className={styles.formasdona}>
              <div>
                <h4>Visita NUESTRAS INSTALACIONES</h4>
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
          </Col>
          <Col xs={6} className={styles.borderdona}>
            <h2 className={styles.formasdona}>Formulario de donación</h2>
            <Form
              className="row g-3 needs-validation"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Tipo de donación :</Form.Label>
                <Controller
                  name="type"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Form.Control
                      {...field}
                      label="Tipo de donación"
                      variant="outlined"
                      size="small"
                    />
                  )}
                />
                <p>{errors.title?.message}</p>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Tipo de entrega:</Form.Label>
                <Controller
                  name="delivery"
                  inputRef={register}
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Form.Control
                      {...field}
                      label="Domicilio o entrega personal"
                      variant="outlined"
                      size="small"
                    />
                  )}
                />
                <p>{errors.title?.message}</p>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Dirección :</Form.Label>
                <Controller
                  name="direction"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Form.Control
                      {...field}
                      label="Direccion"
                      variant="outlined"
                      size="small"
                    />
                  )}
                />
                <p>{errors.title?.message}</p>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Descripción :</Form.Label>
                <Controller
                  name="description"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Form.Control
                      as="textarea"
                      rows={3}
                      {...field}
                      label="Descripción"
                      variant="outlined"
                    />
                  )}
                />
                <p>{errors.title?.message}</p>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Imagen :</Form.Label>
                <Controller
                    name="imgURL"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <Form.Control
                            type="file"
                        />
                    )}
                />
                <p>{errors.title?.message}</p>
              </Form.Group>
              <div className="col-12">
                <Button className="btn btn-primary" type="submit">
                  Enviar
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </body>
  );
};

export default Donacionalimentos;
