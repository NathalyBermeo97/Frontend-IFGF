import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/events.module.css";
const URL = "https://backend-ifgf.herokuapp.com/";
import api from "../api/api";
import { Card, Col, Container, Row } from "react-bootstrap";

const NewsPage = ({ news }) => {
  return (
    <Container>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px 0px",
        }}
      >
        {news.slice(0, 8).map((item) => (
          <Card
            key={item._id}
            className={styles.course}
            style={{ width: "15rem", height: "25rem" }}
          >
            <Card.Img
              variant="top"
              src="https://thumbs.dreamstime.com/b/muestra-y-s%C3%ADmbolo-del-vector-icono-de-las-noticias-aislados-en-el-fondo-blanco-concepto-logotipo-133757450.jpg"
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
export default NewsPage;
export async function getStaticProps() {
  let news = [];
  try {
    const response = await api.get("news");
    console.log("response", response);
    news = response.data.data;
  } catch (e) {
    console.log(e);
  }

  return {
    props: {
      news,
    },
  };
}
