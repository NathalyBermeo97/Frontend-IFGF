import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/events.module.css";
const URL = "http://localhost:3030/";
import api from "../api/api";
import { Card, Container, Row } from "react-bootstrap";

const Messages = ({ messages }) => {
  return (
    <Container>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px 0px",
        }}
      >
        <h1>Mensajes bíblicos</h1>

        {messages.slice(0, 3).map((item) => (
          <Card key={item._id} style={{ width: "28rem", margin: "20px" }}>
            <Card.Img src={URL + item.imgURL} style={{ display: "flex" }} />
          </Card>
        ))}
      </Row>
    </Container>
  );
};
export default Messages;

export async function getStaticProps() {
  let messages = [];
  try {
    const response = await api.get("/messages");
    console.log("response", response);
    messages = response.data.data;
  } catch (e) {
    console.log(e);
  }

  return {
    props: {
      messages,
    },
  };
}
