import { Badge, Button, Card, Col } from "react-bootstrap";
import React, {useState} from "react";
import {ImageNewsModal} from "./ImageNewsModal";
const URL = "https://backend-ifgf.herokuapp.com/";

export const NewsItem = ({ news,onShowModal, handleDelete  }) => {
    console.log({ news });
    const [isOpen, setIsOpen] = useState(false);
    const [newsItem, setNews] = useState(null);
    const onModal = (newsImage) => {
        setNews(newsImage);
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
                        src={URL+news.imgURL}
                        onClick={() => onModal(news)}


                    />
                <ImageNewsModal isOpen={isOpen} news={news} setIsOpen={setIsOpen} />

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