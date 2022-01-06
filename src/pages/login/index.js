import React, { useState } from "react";
import styles from "./styles.module.css";
import { Button } from "@material-ui/core";
import { useRouter } from "next/router";
import Link from "next/link";
import { withPublic } from "../../hocs/withPublic";
import Context, { useAuth } from "../../context/AuthContext";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Form } from "react-bootstrap";
import * as yup from "yup";
import { ERROR_MESSAGES } from "../../constans/inidex";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";

const loginSchema = yup.object().shape({
  email: yup
    .string()
      .email(ERROR_MESSAGES.EMAIL)
    .required(ERROR_MESSAGES.REQUIRED("email"))
    .matches(/^[A-Za-z0-9!@#$%_\-^&*]+/, ERROR_MESSAGES.MATCH),
  password: yup
    .string()
      //.min(8,ERROR_MESSAGES.MIN("contraseña",8))
    .required(ERROR_MESSAGES.REQUIRED("password"))
    .matches(/^[A-Za-z0-9!@#$%_\-^&*]+/, ERROR_MESSAGES.MATCH),
});

const LoginPage = () => {
  const { login } = useAuth();
  const router = useRouter();

  const onSubmit = (data) => {
    console.log({data})
    const email = data.email
    const password = data.password
    login({ email, password });

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
    <body className={styles.body}>
      <Navbar />
      <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1 className={styles.title}>Bienvenido</h1>
          <h3 className={styles.title}>Inicio de sesión</h3>
        </div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            className={styles.inputs}
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
          <Form.Control
            className={styles.inputs}
            type="password"
            variant="outlined"
            placeholder="Contraseña"
            {...register("password")}
            isInvalid={!!errors.password?.message}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password?.message}
          </Form.Control.Feedback>
        </Form.Group>
        <div className={styles.loginButtons}>
          <Button variant="outlined" size="medium" type="submit">
            Ingresar
          </Button>

          <Button
            variant="outlined"
            size="medium"
            type="submit"
            onClick={() => router.push("/")}
          >
            Salir
          </Button>
        </div>
        <Link href="/register">
          <p className={styles.createAccount}>¿No tiene una cuenta?</p>
        </Link>
      </Form>
      <Footer />
    </body>
  );
};
export default withPublic(LoginPage, "/admin");
