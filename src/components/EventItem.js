import { useRouter } from "next/router";
import { Button, Card, Col, Row } from "react-bootstrap";
import { ROUTES } from "../constants/routes";
import { useAuth } from "../context/AuthContext";
import React, { useState } from "react";
import { ImageEventsModal } from "./ImageEventsModal";
import { InfoEventsModal } from "./InfoEventsModal";
const URL = "https://backend-ifgf.herokuapp.com/";

export const EventItem = ({
  event,
  onShowModal,
  onShowEditModal,
  onShowDeleteModal,
}) => {
  const router = useRouter();
  const { users } = useAuth();
  console.log({ event });
  const eventUsers = event?.inscriptions?.map((userId) => {
    return users?.find((user) => user._id === userId);
  });

  const newEvent = { ...event, inscriptions: eventUsers };
  const [isOpen, setIsOpen] = useState(false);
  const [isInfoOpen, setInfoIsOpen] = useState(false);

  const onModal = (newsImage) => {
    setEvents(newsImage);
    setIsOpen(true);
  };

  const infoModal = () => {
    setInfoIsOpen(true);
  };

  return (
    <>
      <Col
        style={{
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Card style={{ width: "18rem" }}>
          <Card.Img src={URL + event.imgURL} onClick={() => onModal(event)} />
          <ImageEventsModal
            isOpen={isOpen}
            events={event}
            setIsOpen={setIsOpen}
          />
          <Card.Body>
            <Card.Title>{event.title}</Card.Title>
            <Card.Text>{event.description}</Card.Text>
            <Card.Text>{eventUsers.name}</Card.Text>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "0px 5px",
              }}
            >
              {router.pathname.startsWith(ROUTES.ADMIN) ? (
                <>
                  <Button size="sm" onClick={() => onShowEditModal(newEvent)}>
                    Editar
                  </Button>

                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => onShowDeleteModal(event._id)}
                  >
                    Eliminar
                  </Button>

                  <Button
                    size="sm"
                    variant="success"
                    onClick={() => infoModal()}
                  >
                    Ver más
                  </Button>
                </>
              ) : (
                <Button onClick={() => onShowModal(event)}>
                  Más información
                </Button>
              )}
            </div>
          </Card.Body>
        </Card>
      </Col>
      <InfoEventsModal
        isInfoOpen={isInfoOpen}
        event={newEvent}
        setInfoIsOpen={setInfoIsOpen}
      />
    </>
  );
};
