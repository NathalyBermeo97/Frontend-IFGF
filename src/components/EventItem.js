import { useRouter } from "next/router";
import { Button, Card, Col, Row } from "react-bootstrap";
import { ROUTES } from "../constants/routes";
import { useAuth } from "../context/AuthContext";
import React, { useState } from "react";
import { ImageEventsModal } from "./ImageEventsModal";
import { InfoEventsModal } from "./InfoEventsModal";
const URL = "http://localhost:3030/";

export const EventItem = ({
  event,
  onShowModal,
  onShowEditModal,
  handleDelete,
}) => {
  const router = useRouter();
  const { users } = useAuth();

  const eventUsers = event?.inscriptions?.map((userId) => {
    return users?.find((user) => user._id === userId);
  });

  const newEvent = { ...event, inscriptions: eventUsers };
  const [isOpen, setIsOpen] = useState(false);
  const [isInfoOpen, setInfoIsOpen] = useState(false);
  const [isInscriptionOpen, setInscriptionIsOpen] = useState(false);
  const [eventsItem, setEvents] = useState(null);
  const [eventsInfoItem, setInfoEvents] = useState(null);
  const [eventsInscriptionItem, setInscriptionEvents] = useState(null);

  const onModal = (newsImage) => {
    setEvents(newsImage);
    setIsOpen(true);
  };

  const infoModal = (newsInfo) => {
    setInfoEvents(newsInfo);
    setInfoIsOpen(true);
  };
  const inscriptionModal = (newsInscription) => {
    setInscriptionEvents(newsInscription);
    setInscriptionIsOpen(true);
  };

  return (
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
                  onClick={() => handleDelete(event._id)}
                >
                  Eliminar
                </Button>

                <InfoEventsModal
                  isInfoOpen={isInfoOpen}
                  events={event}
                  setInfoIsOpen={setInfoIsOpen}
                />
              </>
            ) : (
              <Button onClick={() => onShowModal(event)}>
                Más información
              </Button>
            )}
          </div>
          <Row>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
                gap: "0px 5px",
              }}
            >
              <Button size="sm" variant="success" onClick={() => infoModal()}>
                Ver más
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};
