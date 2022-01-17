import React from "react";
import { useAlbums } from "../../hooks/useAlbums";
import { Col, Row, Button, Container, Card } from "react-bootstrap";
import styles from "../../styles/events.module.css";
const url = "https://backend-ifgf.herokuapp.com/";

const HomeAlbums = ({}) => {
    const { albums } = useAlbums();

    return (
        <>
            <div className={styles.news}>
                <h1 className={styles.section}>Albums de fotos</h1>
                <div className={styles.linea}></div>
            </div>
            <Container>
                <Row>
                    <Col
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "15px 0px",
                        }}
                    >
                        {albums.map((item) => (
                            <Card
                                key={item._id}
                                className={styles.course}
                                style={{ width: "15rem", height: "25rem" }}
                            >
                                <Card.Img src={url + item.imgURL} variant="top" />
                                <Card.Body>
                                    <Card.Title className={styles.name}>{item.title}</Card.Title>
                                    <Card.Text className={styles.description}>
                                        {item.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </Col>
                </Row>
            </Container>
        </>
    );
};
export default HomeAlbums;
