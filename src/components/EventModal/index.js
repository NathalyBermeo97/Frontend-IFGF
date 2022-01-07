import React, { useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
import { useInscription } from "../../hooks/useInscription";

export const EventModal = ({ isOpen, event, setIsOpen }) => {

  const {currentUser} = useAuth()
  const {inscriptions, createInscription} = useInscription()
  console.log({inscriptions})

  const handleCreateInscription = () => {
    const {_id: user_id} = currentUser
    const {_id: event_id} = event
    //console.log({userId, eventId})
    createInscription({user_id, event_id}).then(res => console.log({res}))
  }

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
          Close
        </Button>
        <Button variant="primary" onClick={handleCreateInscription}>Inscribirse</Button>
      </Modal.Footer>
    </Modal>
  )
};
