import React from "react";
import styles from "../../styles/style.module.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import { ROUTES } from "../../constants/routes";

const DONATIONS_TYPES = [
  {
    title: "Donación económica",
    description: "",
    imgURL:
      "https://assets.change.org/photos/2/vq/dw/gmVqDwsBWiCaqot-800x450-noPad.jpg?1530696440",
    route: ROUTES.ECONOMIC_DONATIONS,
  },
  {
    title: "Donación de alimentos",
    description: "",
    imgURL:
      "https://i1.wp.com/elmundoboston.com/wp-content/uploads/2020/04/alimentos.jpeg?fit=1800%2C1200&ssl=1",
    route: ROUTES.FOOD_DONATIONS,
  },
  {
    title: "Donación de ropa",
    description: "",
    imgURL:
      "https://www.caritas.org.mx/wp-content/uploads/2020/05/moda-sostenible-cuida-al-planeta-y-ayuda-a-otros-con-tu-ropa-1024x768.jpg",
    route: ROUTES.CLOTHES_DONATIONS,
  },
];

const Donaciones = () => {
  const router = useRouter();
  return (
    <Container>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px 0px",
        }}
      >
        <h1 className={styles.section}>DONACIONES</h1>
        <div className={styles.linea}></div>

        <h2>
          Puedes colaborar con la iglesia con los siguientes tipos de donaciones
        </h2>
        {DONATIONS_TYPES.map((type) => (
          <Col
            style={{
              justifyContent: "center",
              display: "flex",
            }}
            key={type.title}
          >
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={type.imgURL} />
              <Card.Body>
                <Card.Title>{type.title}</Card.Title>
                <Card.Text>{type.description}</Card.Text>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "0px 5px",
                  }}

                >
                  <Button onClick={() => router.push(type.route)}>DONAR</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Donaciones;
