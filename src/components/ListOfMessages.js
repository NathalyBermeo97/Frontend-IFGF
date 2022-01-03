import React from "react";
import { Button, ListGroup } from "react-bootstrap";

export const ListOfMessages = ({ messagesItem, onShowModal, handleDelete }) => {
    return (
        <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
        >
            <div className="ms-2 me-auto">
                <div className="fw-bold">{messagesItem.title}</div>
                {messagesItem.description}
            </div>
            <Button size="sm" onClick={() => onShowModal(messagesItem)}>
                ver
            </Button>
            <Button
                size="sm"
                variant="danger"
                onClick={() => handleDelete(messagesItem._id)}
            >
                eliminar
            </Button>
        </ListGroup.Item>
    );
};