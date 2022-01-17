import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/events.module.css";
const url = "https://backend-ifgf.herokuapp.com/";
import api from "../api/api";
import { Card, Container, Row } from "react-bootstrap";

const Albums = ({ albums }) => {
  return (
    <Container>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px 0px",
        }}
      >
        <h1>Albums</h1>

        {albums.map((item) => (
          <Card
            key={item._id}
            className={styles.course}
            style={{ width: "15rem", height: "25rem" }}
          >
              <Card.Img
                  variant="top"
                  src="https://us.123rf.com/450wm/bestvectorstock/bestvectorstock1808/bestvectorstock180806895/107283376-vector-de-icono-de-c%C3%A1mara-de-foto-digital-aislado-sobre-fondo-blanco-para-su-dise%C3%B1o-web-y-aplicacion.jpg?ver=6"
              />
            <Card.Body>
              <Card.Title className={styles.name}>{item.title}</Card.Title>
              <Card.Text className={styles.description}>
                {item.description}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
};
export default Albums;
export async function getStaticProps() {
  let albums = [];
  try {
    const response = await api.get("albums");
    console.log("response", response);
    albums = response.data.data;
  } catch (e) {
    console.log(e);
  }

  return {
    props: {
      albums,
    },
  };
}
