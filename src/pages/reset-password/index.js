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

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email(ERROR_MESSAGES.EMAIL)
    .required(ERROR_MESSAGES.REQUIRED("email"))
    .matches(/^[A-Za-z0-9!@#$%_\-^&*]+/, ERROR_MESSAGES.MATCH),
});

const SendEmail = () => {
  const onSubmit = async ({ email }) => {
    console.log({ email });
    try {
      await User.sendPasswordResetEmail(email);
      swal('Genial', "Revise su correo", 'success');
      reset()
    } catch (error) {
      swal("Oops", error.response?.data?.message, "error");
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
                  <h1 className={styles.title}>Recuperación de contraseña</h1>
                </div>
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
                <div  className={styles.loginButtons}>
                  <Button variant="outline-primary" size="medium" type="submit">
                    Enviar
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