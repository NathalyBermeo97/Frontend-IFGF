import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { ROUTES } from "../../constants/routes";
import { useAuth } from "../../context/AuthContext";
import { useEvents } from "../../hooks/useEvents";
import { useInscription } from "../../hooks/useInscription";

export const EventModal = ({ isOpen, event, setIsOpen }) => {
  const { createInscription } = useEvents();
  const { currentUser } = useAuth();
  const router = useRouter();
  const isInTheLimit = event?.inscriptions?.length === event.number;
  const isDisabled =
    event.inscriptions?.includes(currentUser?._id) || isInTheLimit;
  const handleCreateInscription = () => {
    if (!currentUser) {
      return router.push(ROUTES.LOGIN);
    }
    const { _id: event_id } = event;
    createInscription(event_id).then((res) => {
      console.log(res);
      if (res.data.message) {
        setIsOpen(false);
      }
    });
  };

  const handleCancelInscription = () => {
    alert("inscription canceled");
  };

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
        <p>Número de personas inscritas: {event.inscriptions?.length}</p>
        <p>Límite: {event.number}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setIsOpen(false)}>
          Cerrar
        </Button>
        {router.pathname === ROUTES.EVENTS ? (
          <Button
            variant="primary"
            onClick={handleCreateInscription}
            disabled={isDisabled}
          >
            {isDisabled
              ? isInTheLimit
                ? "Sin cupones"
                : "Inscrito"
              : "Inscribirse"}
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
