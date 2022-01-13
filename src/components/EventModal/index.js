import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { ROUTES } from "../../constants/routes";
import { useAuth } from "../../context/AuthContext";
import { useInscription } from "../../hooks/useInscription";

export const EventModal = ({ isOpen, event, setIsOpen }) => {
  const { inscriptions, createInscription } = useInscription();

  const handleCreateInscription = () => {
    const { _id: event_id } = event;
    createInscription(event_id).then((res) => console.log({ res }));
  };

  const handleCancelInscription = () => {
    alert('inscription canceled')
  } 

  const router = useRouter();

  return (
    <Modal show={isOpen} onHide={() => setIsOpen(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{event.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{event.description}</p>
        <p>Ubicación: {event.ubication}</p>
        <p>Horario: {event.schedule}</p>
        <p>Costo: {event.cost}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setIsOpen(false)}>
          Cerrar
        </Button>
        {router.pathname === ROUTES.EVENTS ? (
          <Button variant="primary" onClick={handleCreateInscription}>
            Inscribirse
          </Button>
        ) : (
          <Button variant="primary" onClick={handleCancelInscription}>
            Cancelar Inscripción
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};
