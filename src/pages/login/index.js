import styles from "./styles.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { withPublic } from "../../hocs/withPublic";
import { Card, Col, Container, Form, Row, Button } from "react-bootstrap";
import * as yup from "yup";
import { ERROR_MESSAGES } from "../../constants/inidex";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { useAuth } from "../../context/AuthContext";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import swal from "sweetalert";
import { useState } from "react";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email(ERROR_MESSAGES.EMAIL)
    .required(ERROR_MESSAGES.REQUIRED("email"))
    .matches(/^[A-Za-z0-9!@#$%_\-^&*]+/, ERROR_MESSAGES.MATCH),
  password: yup
    .string()
    .required(ERROR_MESSAGES.REQUIRED("password"))
    .matches(/^[A-Za-z0-9!@#$%_\-^&*]+/, ERROR_MESSAGES.MATCH),
});

const LoginPage = () => {
  const { login } = useAuth();
  const router = useRouter();
  const [state, setState] = useState(false);
  const btn = () => {
    setState((prevState) => !prevState);
  };

  const onSubmit = (data) => {
    console.log({ data });
    const email = data.email;
    const password = data.password;
    login({ email, password });
    swal("Bienvenido")
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    clearErrors,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

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
                  <h1 className={styles.title}>Inicio de sesión</h1>
                </div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
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
                <Form.Group className="mb-3" controlId="formBasicEmail">
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
                      <Button onClick={btn}>
                        {state ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                      </Button>
                    </Col>
                  </Row>
                </Form.Group>
                <div className={styles.loginButtons}>
                  <Button variant="outline-primary" size="medium" type="submit">
                    Ingresar
                  </Button>
                </div>
                <Link href="/register">
                  <p className={styles.createAccount}>¿No tiene una cuenta?</p>
                </Link>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default withPublic(LoginPage, "/admin/news");
