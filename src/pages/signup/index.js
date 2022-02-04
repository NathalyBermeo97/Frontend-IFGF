import React, { useState } from "react";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { ERROR_MESSAGES, SERVER_RESPONSE } from "../../constants/inidex";
import { useAuth } from "../../context/AuthContext";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import swal from "sweetalert";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required(ERROR_MESSAGES.REQUIRED("nombre"))
    .matches(/^[A-Za-z0-9!@#$%_\-^&*]+/, ERROR_MESSAGES.MATCH),
  lastname: yup
    .string()
    .required(ERROR_MESSAGES.REQUIRED("apellido"))
    .matches(/^[A-Za-z0-9!@#$%_\-^&*]+/, ERROR_MESSAGES.MATCH),
  cellphone: yup.string().required(ERROR_MESSAGES.NUMBER("celular/teléfono")),
  email: yup
    .string()
    .email(ERROR_MESSAGES.EMAIL)
    .required(ERROR_MESSAGES.REQUIRED("email"))
    .matches(/^[A-Za-z0-9!@#$%_\-^&*]+/, ERROR_MESSAGES.MATCH),
  password: yup
    .string()
    .required(ERROR_MESSAGES.REQUIRED("contraseña"))
    .matches(/^[A-Za-z0-9!@#$%_\-^&*]+/, ERROR_MESSAGES.MATCH),

});
const SignupPage = () => {
  const { register: doRegister } = useAuth();
  const router = useRouter();
  const [result, setResult] = useState("");

  const [state, setState] = useState(false);
  const btn = () => {
    setState((prevState) => !prevState);
  };

  const onSubmit = async (data) => {
    console.log({ data });
    const name = data.name;
    const lastname = data.lastname;
    const cellphone = data.cellphone;
    const email = data.email;
    const password = data.password;
    const roles = "user";
    try {
      await doRegister({ name, lastname, cellphone, email, password, roles });
      swal("Usuario registrado");
    } catch (error) {
      console.log(error.code);
      alert("no se puede registrar");
    }
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    clearErrors,
  } = useForm({
    defaultValues: {
      name: "",
      lastname: "",
      cellphone: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(registerSchema),
  });
  console.log({ errors });


  return (
    <Container>
      <Row>
        <Col
          style={{
            justifyContent: "center",
            width: "18rem",
          }}
        >
          <Card.Img
            className="d-flex w-100"
            src="https://scontent.fuio1-2.fna.fbcdn.net/v/t1.6435-9/65510633_2787099614653153_7989606629123293184_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_ohc=hKw6qg18Hl8AX9bDyxy&_nc_ht=scontent.fuio1-2.fna&oh=00_AT9I1x7TlXnC2iYUY0Tsbliu66t_x_zOtdVxDosDpmQVhw&oe=6204C3D5"
          />
        </Col>

        <Col
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Card
            style={{
              display: "flex",
              justifyContent: "center",
              width: "28rem",
              margin: "20px",
            }}
          >
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <h3 className={styles.title}>Registro de sesión</h3>
                </div>
                <Form.Group className="mb-3">
                  <Form.Control
                    variant="outlined"
                    placeholder="Nombre"
                    {...register("name")}
                    isInvalid={!!errors.name?.message}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name?.message}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    variant="outlined"
                    placeholder="Apellido"
                    {...register("lastname")}
                    isInvalid={!!errors.lastname?.message}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.lastname?.message}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="number"
                    variant="outlined"
                    placeholder="Celular/Teléfono"
                    {...register("cellphone")}
                    isInvalid={!!errors.cellphone?.message}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.cellphone?.message}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    variant="outlined"
                    placeholder="Email"
                    {...register("email")}
                    isInvalid={!!errors.email?.message}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email?.message}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Row>
                    <Col xs={10}>
                      <Form.Control
                        type={state ? "text" : "password"}
                        variant="outlined"
                        placeholder="Contraseña"
                        {...register("password")}
                        isInvalid={!!errors.password?.message}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.password?.message}
                      </Form.Control.Feedback>
                    </Col>
                    <Col xs={2}>
                      <Button className={styles.btn} onClick={btn}>
                        {state ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                      </Button>
                    </Col>
                  </Row>
                </Form.Group>
                <div className={styles.loginButtons}>
                  <Button variant="outline-primary" size="medium" type="submit" >
                    Registrarse
                  </Button>
                </div>
                <Link href="/login">
                  <p className={styles.createAccount}>¿Ya tiene una cuenta?</p>
                </Link>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupPage;
