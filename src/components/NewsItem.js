import { Badge, Button, Card, Col } from "react-bootstrap";
import React from "react";
const URL = "http://localhost:3030/";

export const NewsItem = ({ news, onShowModal, handleDelete  }) => {
    console.log({ news });

    return (
        <Col
            style={{
                justifyContent: "center",
                display: "flex",
            }}
        >
            <Card style={{ width: "18rem" }}>
                <Card.Img
                    src={URL+news.imgURL}

                />
                <Card.Body>
                    <Card.Body>
                        <Card.Title>{news.title}</Card.Title>
                        <Card.Text>{news.description}</Card.Text>

                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                gap: "0px 5px",
                            }}
                        >
                            <Button size="sm" onClick={() => onShowModal(news)}>
                                Editar
                            </Button>
                            <br />
                            <Button
                                size="sm"
                                variant="danger"
                                onClick={() => handleDelete(news._id)}
                            >
                                Eliminar
                            </Button>
                        </div>

                    </Card.Body>
                </Card.Body>
            </Card>
        </Col>
    );
};