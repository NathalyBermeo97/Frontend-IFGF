import styles from "./styles.module.css";
import { useRouter } from "next/router";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import * as yup from "yup";
import { ERROR_MESSAGES } from "../../constants/inidex";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { useAuth } from "../../context/AuthContext";
import React, { useState } from "react";
import { withPublic } from "../../hocs/withPublic";
import User from "../../api/user";
import { ROUTES } from "../../constants/routes";

const loginSchema = yup.object().shape({
  password: yup
    .string()
    .required(ERROR_MESSAGES.REQUIRED("contraseña"))
    .min(8, ERROR_MESSAGES.MIN_STRING("contraseña", 8))
    .matches(/^[A-Za-z0-9!@#$%_\-^&*]+/, ERROR_MESSAGES.MATCH),
});

const SendEmail = () => {
  const route = useRouter()
  const onSubmit = async ({ password }) => {
    const {id: userId} = route.query
    try {
      await User.confirmPasswordReset(userId, password);
      swal("Genial", "Contraseña cambiada con éxito", "success");
      route.replace(ROUTES.LOGIN)
      reset();
    } catch (error) {
      swal("Oops", error.response?.data?.message || 'Ocurrio un error', "error");
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
      email: "",
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
            src="https://scontent.fuio1-2.fna.fbcdn.net/v/t1.6435-9/73126792_3032923500070762_3219151423702827008_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=dAKxeaO4lY0AX-ZpzyM&_nc_ht=scontent.fuio1-2.fna&oh=00_AT9ZqljZnS8EcC1uVo36jX0mo2CpTX69IUtFOLtGK-4I-g&oe=623D2165"
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
                  <h1 className={styles.title}>Cambiar contraseña</h1>
                </div>
                <Form.Group className="mb-3">
                  <Form.Control
                    variant="outlined"
                    placeholder="Password"
                    {...register("password")}
                    isInvalid={!!errors.password?.message}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password?.message}
                  </Form.Control.Feedback>
                </Form.Group>
                <div className={styles.sendEmail}>
                  <Button variant="outline-primary" size="medium" type="submit">
                    Cambiar
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default withPublic(SendEmail, "/admin/news");
