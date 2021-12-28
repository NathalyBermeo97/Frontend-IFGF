import React from "react";
import Link from "next/link";
import styles from "../styles/navbar.module.css";
import { USER_STATES } from "../context/AuthContext"; 
import { Col, Container, Image, Nav, Navbar, Row } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";

const NavbarHome = () => {
  const { currentUser, isLoggedIn, logout } = useAuth();
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
            {isLoggedIn ? (
              <p>
                {currentUser.name}
                <button onClick={() => handleLogout()}>LOGOUT</button>
              </p>
            ) : currentUser === USER_STATES.NOT_KNOWN ? (
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
