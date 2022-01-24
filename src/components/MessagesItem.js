import { Badge, Button, Card, Col } from "react-bootstrap";
import React, {useState} from "react";
import {ImageMessagesModal} from "./ImageMessagesModal";
const URL = "http://localhost:3030/";

export const MessagesItem = ({ messages, onShowModal, handleDelete }) => {
  console.log({ messages });
  const [isOpen, setIsOpen] = useState(false);
  const [messagesItem, setMessages] = useState(null);

  const onModal = (newsImage) => {
    setMessages(newsImage);
    setIsOpen(true);
  };

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
            onClick={() => onModal(messages)}
        />
        <ImageMessagesModal isOpen={isOpen} messages={messages} setIsOpen={setIsOpen} />
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
