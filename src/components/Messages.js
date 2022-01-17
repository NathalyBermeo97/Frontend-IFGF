import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/events.module.css";
const url = "https://backend-ifgf.herokuapp.com/";
import api from "../api/api";
import {Card, Container, Row} from "react-bootstrap";

const Messages = ({ messages }) => {
  return (
      <Container>
        <Row style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px 0px",
        }}>
          <h1>Mensajes bíblicos</h1>

          {messages.slice(0,3).map((item) => (
              <Card key={item._id} className={styles.course} style={{ width: '15rem' , height: '25rem'}} >
                <Card.Img
                    variant="top"
                    src="data:image/png;base64,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"
                />
                <Card.Body>
                  <Card.Title className={styles.name}>
                    {item.title}
                  </Card.Title>
                  <Card.Text className={styles.description}>{item.description}</Card.Text>
                </Card.Body>
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
