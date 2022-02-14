import styles from "../styles/navbar.module.css";
import { USER_STATES } from "../context/AuthContext";
import { Container, Image, Nav, Navbar, NavDropdown, Spinner } from "react-bootstrap";
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
          <Nav className={`me-auto`} variant="tabs" activeKey={router.pathname}>
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
              <NavDropdown title="Eventos" id="nav-dropdown-eventos">
                <NavDropdown.Item
                  eventKey={ROUTES.EVENTS}
                  onClick={() => router.push(ROUTES.EVENTS)}
                  disabled={router.pathname === ROUTES.EVENTS}
                >
                  Eventos
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => router.push(ROUTES.MY_EVENTS)}
                  disabled={!isLoggedIn || router.pathname === ROUTES.MY_EVENTS}                >
                  Mis Eventos
                </NavDropdown.Item>
              </NavDropdown>
            </Nav.Item>
            <Nav.Item>
              <NavDropdown title="Donaciones" id="nav-dropdown-donaciones">
                <NavDropdown.Item
                  onClick={() => router.push(ROUTES.CLOTHES_DONATIONS)}
                  disabled={router.pathname === ROUTES.CLOTHES_DONATIONS}
                >
                  Donar ropa
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => router.push(ROUTES.FOOD_DONATIONS)}
                  disabled={router.pathname === ROUTES.FOOD_DONATIONS}
                >
                  Donar comida
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => router.push(ROUTES.ECONOMIC_DONATIONS)}
                  disabled={router.pathname === ROUTES.ECONOMIC_DONATIONS}
                >
                  Donar dinero
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => router.push(ROUTES.MY_DONATIONS)}
                  disabled={!isLoggedIn || router.pathname === ROUTES.MY_DONATIONS}
                >
                  Mis Donaciones
                </NavDropdown.Item>
              </NavDropdown>
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
                eventKey={ROUTES.QUESTIONNAIRES}
                onClick={() => router.push(ROUTES.QUESTIONNAIRES)}
                disabled={router.pathname === ROUTES.QUESTIONNAIRES}
              >
                Cuestionarios
              </Nav.Link>
            </Nav.Item>
            {isLoggedIn ? (
              <NavDropdown title={currentUser.name} id="nav-dropdown">
                <NavDropdown.Item onClick={() => logout()}>
                  <Nav.Link
                      eventKey={ROUTES.HOME}
                      onClick={() => router.push(ROUTES.HOME)}
                      disabled={router.pathname === ROUTES.HOME}
                  >
                    Cerrar sesión
                  </Nav.Link>
                </NavDropdown.Item>
              </NavDropdown>
            ) : currentUser === USER_STATES.NOT_KNOWN ? (
              <Spinner animation="border" />
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
