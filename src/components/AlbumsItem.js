import { Badge, Button, Card, Col } from "react-bootstrap";
import React from "react";
const URL = "http://localhost:3030/";

export const AlbumsItem = ({ albums, onShowModal, handleDelete  }) => {
    console.log({ albums });

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

                />
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