import React from "react";
import { Button, ListGroup } from "react-bootstrap";

export const ListOfAlbums= ({albumsItem, onShowModal}) => {
    return (
        <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
        >
            <div className="ms-2 me-auto">
                <div className="fw-bold">{albumsItem.title}</div>
                {albumsItem.description}
            </div>
            <Button size="sm" onClick={() => onShowModal(albumsItem)}>
                ver
            </Button>
        </ListGroup.Item>
    );
};