import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/events.module.css";
const URL = "https://backend-ifgf.herokuapp.com/";
import api from "../api/api";
import { Card, Col, Container, Row } from "react-bootstrap";
const News = ({ news }) => {
  return (
    <Container>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px 0px",
        }}
      >


        <h1>Noticias</h1>

        {news.slice(0,3).map((item) => (
          <Card
            key={item._id}
            className={styles.course}
            style={{ width: "23rem"}}
          >
              <Card.Img src={URL + item.imgURL} style={{ marginTop: "11px",marginBottom: "11px"}}/>
          </Card>
        ))}
      </Row>
    </Container>
  );
};
export default News;
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
