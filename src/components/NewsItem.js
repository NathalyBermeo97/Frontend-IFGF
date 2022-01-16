import { Badge, Button, Card, Col } from "react-bootstrap";
import React from "react";

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
                    variant="top"
                    src="https://thumbs.dreamstime.com/b/muestra-y-s%C3%ADmbolo-del-vector-icono-de-las-noticias-aislados-en-el-fondo-blanco-concepto-logotipo-133757450.jpg"
                />
                <Card.Body>
                    <Card.Title>Noticias</Card.Title>
                    <Card.Text>
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{news.title}</div>
                            {news.description}
                        </div>
                        <Button size="sm" onClick={() => onShowModal(news)}>
                            Editar
                        </Button>
                    
                        <Button
                            size="sm"
                            variant="danger"
                            onClick={() => handleDelete(news._id)}
                        >
                            Eliminar
                        </Button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};