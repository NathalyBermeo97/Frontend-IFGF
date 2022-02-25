import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/events.module.css";
const URL = "https://backend-ifgf.herokuapp.com/";
import api from "../api/api";
import { Card, Col, Container, Row } from "react-bootstrap";

const Albums = ({ albums }) => {
    return (
        <Container>
            <Row
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
                        style={{ width: "23rem", margin: "20px" }}
                    >
                        <Card.Img src={URL + item.imgURL} style={{ marginTop: "15px",display: "flex" }} />
                        <Card.Title  style={{ marginTop: "15px",display: "flex" }}>{item.title}</Card.Title>
                    </Card>
                ))}
            </Row>
        </Container>
    );
};
export default Albums;
export async function getStaticProps() {
    let albums = [];
    try {
        const response = await api.get("albums");
        console.log("response", response);
        albums = response.data.data;
    } catch (e) {
        console.log(e);
    }

    return {
        props: {
            albums,
        },
    };
}