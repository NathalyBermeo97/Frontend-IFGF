import { Badge, Button, Card, Col } from "react-bootstrap";
import React, {useState} from "react";
import {ImageAlbumModal} from "./ImageAlbumModal";
const URL = "https://backend-ifgf.herokuapp.com/";

export const AlbumsItem = ({ albums, onShowModal, handleDelete  }) => {
    console.log({ albums });
    const [isOpen, setIsOpen] = useState(false);
    const [messagesItem, setAlbums] = useState(null);

    const onModal = (newsImage) => {
        setAlbums(newsImage);
        setIsOpen(true);
    };

    return (
        <Col
            style={{
                justifyContent: "center",
                display: "flex",
            }}
        >
            <Card style={{ width: "18rem" }}>
                <Card.Img
                    src={URL+albums.imgURL}
                    onClick={() => onModal(albums)}

                />
                <ImageAlbumModal isOpen={isOpen} albums={albums} setIsOpen={setIsOpen} />
                <Card.Body>
                    <Card.Title>{albums.title}</Card.Title>
                    <Card.Text>{albums.description}</Card.Text>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "0px 5px",
                        }}
                    >
                        <Button size="sm" onClick={() => onShowModal(albums)}>
                            Editar
                        </Button>
                        <br />
                        <Button
                            size="sm"
                            variant="danger"
                            onClick={() => handleDelete(albums._id)}
                        >
                            Eliminar
                        </Button>
                    </div>

                </Card.Body>
            </Card>
        </Col>
    );
};