import { Badge, Button, Card, Col } from "react-bootstrap";
import React from "react";
import ReactPlayer from "react-player";
import {ROUTES} from "../constants/routes";
import {router} from "next/client";

export const VideosItem = ({ videos, onShowModal,onShowDeleteModal }) => {
    console.log({ videos});

    return (
        <Col
            style={{
                justifyContent: "center",
                display: "flex",
            }}
        >
            <Card style={{ width: "20rem" }}>
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
                            {router.pathname.startsWith(ROUTES.ADMIN) ? (
                                <>
                                    <Button size="sm" onClick={() => onShowModal(videos)}>
                                        Editar
                                    </Button>

                                    <Button
                                        size="sm"
                                        variant="danger"
                                        onClick={() => onShowDeleteModal(videos._id)}
                                    >
                                        Eliminar
                                    </Button>

                                </>
                            ) : (
                                ''
                            )}
                        </div>

                    </Card.Body>
                </Card.Body>
            </Card>
        </Col>
    );
};