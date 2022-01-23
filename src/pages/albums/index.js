import React from "react";
import { useAlbums } from "../../hooks/useAlbums";
import { Col, Row, Button, Container, Card } from "react-bootstrap";
import styles from "../../styles/events.module.css";
import Albums from "../../components/Albums";
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
                    <Albums albums={albums} />
                </Row>
            </Container>
        </>
    );
};
export default HomeAlbums;
