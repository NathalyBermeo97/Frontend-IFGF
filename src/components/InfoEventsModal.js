import React from "react";
import { Button, Card, Modal, Table } from "react-bootstrap";

export const InfoEventsModal = ({ isInfoOpen, event, setInfoIsOpen }) => {
  return event ? (
    <Modal show={isInfoOpen} onHide={() => setInfoIsOpen(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Información del evento</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>🔠 Título: {event.title}</p>
        <p>🔠 Descripción: {event.description}</p>
        <p>🌎 Ubicación: {event.location}</p>
        <p>🕘 Horario: {event.schedule}</p>
        <p>💰 Costo: {event.cost}</p>
        <p>🔢 Aforo permitido: {event.number}</p>
        <h5>Usuarios registrados</h5>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Teléfono</th>
            </tr>
          </thead>
          <tbody>
            {event.inscriptions?.length > 0 ? (
              event.inscriptions.map((user) => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.lastname}</td>
                  <td>{user.cellphone}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} style={{ textAlign: "center" }}>
                  Sin usuarios registrados
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setInfoIsOpen(false)}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  ) : (
    ""
  );
};
