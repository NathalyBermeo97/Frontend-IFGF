import Link from "next/link";
import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { useAuth, USER_STATES } from "../context/AuthContext";
import styles from "../styles/navbar.module.css";

export const Layout = () => {
  const { currentUser, isLoggedIn } = useAuth();

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <Image
            src="http://www.ifgfsf.com/wp-content/uploads/2016/10/IFGF_logo.png"
            className={styles.image}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav>
              <Link href='/'>Usuarios</Link>
            </Nav>
            <Nav.Link>
                Noticias
              {/* <Link href="/admin/news"><a>Noticias</a></Link> */}
            </Nav.Link>
            <Nav.Link>
                Eventos
              {/* <Link href="/eventos"><a>Eventos</a></Link> */}
            </Nav.Link>
            <Nav.Link>
                Donaciones
              {/* <Link href="/donaciones"><a>Donaciones</a></Link> */}
            </Nav.Link>
            <Nav.Link>
                Videos
              {/* <Link href="/videos"><a>Videos</a></Link> */}
            </Nav.Link>
            <Nav.Link>
                Juagos
              {/* <Link href="/"><a>Juegos</a></Link> */}
            </Nav.Link>
            {/* <Nav.Link>
              {isLoggedIn ? (
                <p>
                  {currentUser.name}
                  <button onClick={() => handleLogout()}>LOGOUT</button>
                </p>
              ) : currentUser === USER_STATES.NOT_KNOWN ? (
                "cargando..."
              ) : (
                <Link href="/login"><a>Iniciar Sesión</a></Link>
              )}
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
