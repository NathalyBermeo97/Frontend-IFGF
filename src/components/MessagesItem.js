import { Badge, Button, Card, Col } from "react-bootstrap";
import React from "react";
const URL = "http://localhost:3030/";

export const MessagesItem = ({ messages, onShowModal, handleDelete }) => {
  console.log({ messages });

  return (
    <Col
      style={{
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Card style={{ width: "18rem" }}>
        <Card.Img
            src={URL+messages.imgURL}
        />
        <Card.Body>
          <Card.Title>{messages.title}</Card.Title>
          <Card.Text>{messages.description}</Card.Text>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "0px 5px",
              }}
            >
              <Button size="sm" onClick={() => onShowModal(messages)}>
                Editar
              </Button>
              <br />
              <Button
                size="sm"
                variant="danger"
                onClick={() => handleDelete(messages._id)}
              >
                Eliminar
              </Button>
            </div>

        </Card.Body>
      </Card>
    </Col>
  );
};
