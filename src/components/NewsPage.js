import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/events.module.css";
const URL = "https://backend-ifgf.herokuapp.com/";
import api from "../api/api";
import { Card, Col, Container, Row } from "react-bootstrap";
const News = ({ news }) => {
    return (
        <Container>
            <Row
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "15px 0px",
                }}
            >

                {news.map((item) => (
                    <Card
                        key={item._id}
                        className={styles.course}
                        style={{ width: "23rem", marginTop: "20px" }}
                    >
                        <Card.Img src={URL + item.imgURL} style={{ marginTop: "15px",display: "flex" }} />
                        <Card.Title style={{ marginTop: "15px",display: "flex" }}>{item.title}</Card.Title>
                        <Card.Text style={{ marginBottom: "15px",display: "flex" }}>{item.description}</Card.Text>
                    </Card>
                ))}
            </Row>
        </Container>
    );
};
export default News;
export async function getStaticProps() {
    let news = [];
    try {
        const response = await api.get("news");
        console.log("response", response);
        news = response.data.data;
    } catch (e) {
        console.log(e);
    }

    return {
        props: {
            news,
        },
    };
}
