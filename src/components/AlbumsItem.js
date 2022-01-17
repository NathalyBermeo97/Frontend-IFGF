import { Badge, Button, Card, Col } from "react-bootstrap";
import React from "react";

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
                    variant="top"
                    src="https://us.123rf.com/450wm/bestvectorstock/bestvectorstock1808/bestvectorstock180806895/107283376-vector-de-icono-de-c%C3%A1mara-de-foto-digital-aislado-sobre-fondo-blanco-para-su-dise%C3%B1o-web-y-aplicacion.jpg?ver=6"
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