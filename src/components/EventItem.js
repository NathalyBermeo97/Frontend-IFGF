import { useRouter } from "next/router";
import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { ROUTES } from "../constants/routes";

export const EventItem = ({
  event,
  onShowModal,
  onShowEditModal,
  handleDelete,
}) => {
  const router = useRouter();

  return (
    <Col
      style={{
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://backend-ifgf.herokuapp.com/ifgf.png"
        />
        <Card.Body>
          <Card.Title>{event.title}</Card.Title>
          <Card.Text>{event.description}</Card.Text>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0px 5px",
            }}
          >
            {router.pathname.startsWith(ROUTES.ADMIN) ? (
              <>
                <Button size="sm" onClick={() => onShowEditModal(event)}>
                  Editar
                </Button>
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => handleDelete(event._id)}
                >
                  Eliminar
                </Button>
              </>
            ) : (
              <Button onClick={() => onShowModal(event)}>
                Mas información
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};
