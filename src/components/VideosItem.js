import { Badge, Button, Card, Col } from "react-bootstrap";
import React from "react";
import ReactPlayer from "react-player";

export const VideosItem = ({ videos, onShowModal, handleDelete  }) => {
    console.log({ videos});

    return (
        <Col
            style={{
                justifyContent: "center",
                display: "flex",
            }}
        >
            <Card style={{ width: "18rem" }}>
                <ReactPlayer
                    url={videos.url}
                    className="react-player"
                    controls
                    width="20em"
                    height="10em"
                />
                <Card.Body>
                    <Card.Body>
                        <Card.Title>{videos.title}</Card.Title>
                        <Card.Text>{videos.description}</Card.Text>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                gap: "0px 5px",
                            }}
                        >
                            <Button size="sm" onClick={() => onShowModal(videos)}>
                                Editar
                            </Button>
                            <br />
                            <Button
                                size="sm"
                                variant="danger"
                                onClick={() => handleDelete(videos._id)}
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