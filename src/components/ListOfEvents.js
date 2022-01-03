import React from "react";
import { Button, ListGroup } from "react-bootstrap";

export const ListOfEvents = ({ eventsItem, onShowModal, handleDelete }) => {
    return (
        <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
        >
            <div className="ms-2 me-auto">
                <div className="fw-bold">{eventsItem.title}</div>
                <p>{eventsItem.description}</p>
                <p>{eventsItem.ubication}</p>
                <p>{eventsItem.schedule}</p>
                <p>{eventsItem.cost}</p>
            </div>
            <Button size="sm" onClick={() => onShowModal(eventsItem)}>
                Editar
            </Button>
            <Button
                size="sm"
                variant="danger"
                onClick={() => handleDelete(eventsItem._id)}
            >
                Eliminar
            </Button>
        </ListGroup.Item>
    );
};