import React from "react";
import { Button, ListGroup } from "react-bootstrap";

export const ListOfGames = ({ gamesItem, onShowModal, handleDelete }) => {
    return (
        <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
        >
            <div className="ms-2 me-auto">
                <div className="fw-bold">{gamesItem.name}</div>
                <p>{gamesItem.title}</p>
                <p>{gamesItem.opcionA}</p>
                <p>{gamesItem.opcionB}</p>
                <p>{gamesItem.opcionC}</p>
                <p>{gamesItem.opcionD}</p>
                <p>{gamesItem.answer}</p>
            </div>
            <Button size="sm" onClick={() => onShowModal(gamesItem)}>
                Editar
            </Button>
            <Button
                size="sm"
                variant="danger"
                onClick={() => handleDelete(gamesItem._id)}
            >
                Eliminar
            </Button>
        </ListGroup.Item>
    );
};