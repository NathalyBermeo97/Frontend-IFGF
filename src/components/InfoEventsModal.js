import React from "react";
import {Button, Card, Modal} from "react-bootstrap";

export const InfoEventsModal = ({ isInfoOpen, events, setInfoIsOpen }) => {

    return events ? (
        <Modal show={isInfoOpen} onHide={() => setInfoIsOpen(false)}  >
            <Modal.Header closeButton>
                <Modal.Title>Información del evento</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>🔠 Titulo: {events.title}</p>
                <p>🔠 Descripción: {events.description}</p>
                <p>🌎 Ubicación: {events.location}</p>
                <p>🕘 Horario: {events.schedule}</p>
                <p>💰 Costo: {events.cost}</p>
                <p>🔢 Aforo permitido: {events.number}</p>
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