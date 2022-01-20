import React from "react";
import { useAlbums } from "../../hooks/useAlbums";
import { Col, Row, Button, Container, Card } from "react-bootstrap";
import styles from "../../styles/events.module.css";
const URL = "http://localhost:3030/";

const HomeAlbums = ({}) => {
    const { albums } = useAlbums();

    return (
        <>
            <div className={styles.news}>
                <h1 className={styles.section}>Albums de fotos</h1>
                <div className={styles.linea}></div>
            </div>
            <Container>
                <Row
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "15px 0px",
                    }}
                >
                    <h1>Albums</h1>

                    {albums.slice(0,3).map((item) => (
                        <Card
                            key={item._id}
                            style={{ width: "28rem" ,margin:"20px"}}
                            className="bg-dark text-white"

                        >
                            <Card.Img
                                src={URL+item.imgURL}
                                alt="Card image"
                                style={{display:"flex"}}
                            />
                            <Card.ImgOverlay>

                                <Card.Body>
                                    <Card.Title >{item.title}</Card.Title>

                                    <Card.Text >
                                        {item.description}

                                    </Card.Text>

                                </Card.Body>
                            </Card.ImgOverlay>
                        </Card>
                    ))}
                </Row>
            </Container>
        </>
    );
};
export default HomeAlbums;
