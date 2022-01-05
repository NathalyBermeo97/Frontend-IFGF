import React from "react";
import Link from "next/link";
import styles from "../styles/navbar.module.css";
import { USER_STATES } from "../context/AuthContext";
import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import { ROUTES } from "../constants/routes";

const NavbarHome = () => {
  const { currentUser, isLoggedIn, logout } = useAuth();
  const router = useRouter();
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand
          onClick={() => router.push(ROUTES.HOME)}
          style={{ cursor: "pointer" }}
        >
          <Image
            src="http://www.ifgfsf.com/wp-content/uploads/2016/10/IFGF_logo.png"
            className={styles.image}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className={`me-auto ${styles.nav}`}
            variant="tabs"
            activeKey={router.pathname}
          >
            <Nav.Item>
              <Nav.Link
                eventKey={ROUTES.HOME}
                onClick={() => router.push(ROUTES.HOME)}
                disabled={router.pathname === ROUTES.HOME}
              >
                Inicio
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey={ROUTES.EVENTS}
                onClick={() => router.push(ROUTES.EVENTS)}
                disabled={router.pathname === ROUTES.EVENTS}
              >
                Eventos
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey={ROUTES.DONATIONS}
                onClick={() => router.push(ROUTES.DONATIONS)}
                disabled={router.pathname === ROUTES.DONATIONS}
              >
                Donaciones
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey={ROUTES.VIDEOS}
                onClick={() => router.push(ROUTES.VIDEOS)}
                disabled={router.pathname === ROUTES.VIDEOS}
              >
                Videos
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey={ROUTES.GAMES}
                onClick={() => router.push(ROUTES.GAMES)}
                disabled={router.pathname === ROUTES.GAMES}
              >
                Juegos
              </Nav.Link>
            </Nav.Item>
            {isLoggedIn ? (
              <NavDropdown title={currentUser.name} id="nav-dropdown">
                <NavDropdown.Item onClick={() => logout()}>
                  LOGOUT
                </NavDropdown.Item>
              </NavDropdown>
            ) : currentUser === USER_STATES.NOT_KNOWN ? (
              "cargando..."
            ) : (
              <>
                {router.pathname === ROUTES.LOGIN ? (
                  <Nav.Item>
                    <Nav.Link
                      eventKey={ROUTES.SIGNUP}
                      onClick={() => router.push(ROUTES.SIGNUP)}
                    >
                      Registrarse
                    </Nav.Link>
                  </Nav.Item>
                ) : router.pathname === ROUTES.SIGNUP ? (
                  <Nav.Item>
                    <Nav.Link
                      eventKey={ROUTES.LOGIN}
                      onClick={() => router.push(ROUTES.LOGIN)}
                    >
                      Iniciar Sesión
                    </Nav.Link>
                  </Nav.Item>
                ) : (
                  <>
                    <Nav.Item>
                      <Nav.Link
                        eventKey={ROUTES.LOGIN}
                        onClick={() => router.push(ROUTES.LOGIN)}
                      >
                        Iniciar Sesión
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey={ROUTES.SIGNUP}
                        onClick={() => router.push(ROUTES.SIGNUP)}
                      >
                        Registrarse
                      </Nav.Link>
                    </Nav.Item>
                  </>
                )}
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavbarHome;
