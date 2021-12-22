import React from "react";
import {Button,Modal} from "react-bootstrap";

export const EventModal = ({ isOpen, event, setIsOpen }) => {
    
  return (
      event ?

          <Modal show={isOpen} onHide={()=>setIsOpen(false)} >
              <Modal.Header closeButton>
                  <Modal.Title>Modal title</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <p>{event.title}</p>
                  <p>{event.description}</p>
                  <p> Ubicación: {event.ubication}</p>
                  <p>Horario: {event.schedule}</p>
                  <p>Costo: {event.cost}</p>

              </Modal.Body>
              <Modal.Footer>
                  <Button variant="secondary" onClick={()=>setIsOpen(false)}>Close</Button>
                  <Button variant="primary">Save changes</Button>
              </Modal.Footer>
          </Modal>: ''
  );
};
