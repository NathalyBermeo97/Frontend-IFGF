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

          {messages.map((item) => (
              <Card key={item.id} className={styles.course} style={{ width: '15rem' , height: '25rem'}} >
                <Card.Img
                    src={url + item.imgURL}
                    variant="top"
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
