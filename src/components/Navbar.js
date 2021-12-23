import React from "react";
import Link from "next/link";
import styles from "../styles/navbar.module.css";
import useUser, { USER_STATES } from "../hooks/useUser";
import { Col, Container, Image, Nav, Navbar, Row } from "react-bootstrap";

const NavbarHome = () => {
  const { user, isLogged, logout } = useUser();
  const handleLogout = () => {
    logout();
  };
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Image
          src="http://www.ifgfsf.com/wp-content/uploads/2016/10/IFGF_logo.png"
          className={styles.image}
        />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link href="/">Inicio</Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/eventos">Eventos</Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/donaciones">Donaciones</Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/videos">Videos</Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/">Juegos</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Row>
          <Col xs={12}>
            {isLogged ? (
              <p>
                {user.name}
                <button onClick={() => handleLogout()}>LOGOUT</button>
              </p>
            ) : user === USER_STATES.NOT_KNOWN ? (
              "cargando..."
            ) : (
              <Link href="/login">Iniciar Sesión</Link>
            )}
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};
export default NavbarHome;
