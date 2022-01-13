import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

export const UpdateDonationModal = ({
  isOpen,
  donation,
  setIsOpen,
  updateDonation,
}) => {
  const [feedback, setFeedback] = useState("");

  const handleUpdate = (accion, donation) => {  
    const changedDonation = {
        ...donation,
        status: accion,
        message: feedback
    };
    updateDonation(changedDonation)
  }

  return (
    <Modal show={isOpen} onHide={() => setIsOpen(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Donación de {donation.type}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Por: {donation.user_id}</p>
        <p>Ubicación: {donation.location}</p>
        <p>Fechas: {donation.date}</p>
        <p>Estado: {donation.status}</p>
        <Form.Group className="mb-3">
          <Form.Label>Comentario de retroalimentación</Form.Label>
          <Form.Control value={feedback} onChange={(e) => setFeedback(e.target.value)}/>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setIsOpen(false)}>
          Cerrar
        </Button>
        <Button
          variant="success"
          id="aceptado"
          onClick={({ target }) => handleUpdate(target.id, donation)}
        >
          Aceptar
        </Button>
        <Button
          variant="warning"
          id="denegado"
          onClick={({ target }) => handleUpdate(target.id, donation)}
        >
          Denegar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
