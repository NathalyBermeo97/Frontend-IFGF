import React from "react";
import { Button, ListGroup } from "react-bootstrap";

export const ListOfVideos = ({ videosItem, onShowModal, handleDelete }) => {
    return (
        <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
        >
            <div className="ms-2 me-auto">
                <div className="fw-bold">{videosItem.title}</div>
                <p>{videosItem.description}</p>
                <p>{videosItem.type}</p>
                <p>{videosItem.url}</p>
            </div>
            <Button size="sm" onClick={() => onShowModal(videosItem)}>
                Editar
            </Button>
            <Button
                size="sm"
                variant="danger"
                onClick={() => handleDelete(videosItem._id)}
            >
                Eliminar
            </Button>
        </ListGroup.Item>
    );
};