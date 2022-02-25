import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/events.module.css";
const URL = "https://backend-ifgf.herokuapp.com/";
import api from "../api/api";
import { Card, Col, Container, Row } from "react-bootstrap";

const MessagePage = ({ messages }) => {
    return (
        <Container>
            <Row
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "15px 0px",
                }}
            >

                {messages.map((item) => (
                    <Card
                        key={item._id}
                        className={styles.course}
                        style={{ width: "28rem", margin: "20px" }}
                    >
                        <Card.Img src={URL + item.imgURL} style={{ display: "flex" }} />
                        <Card.Title>{item.title}</Card.Title>
                    </Card>
                ))}
            </Row>
        </Container>
    );
};
export default MessagePage;
export async function getStaticProps() {
    let messages = [];
    try {
        const response = await api.get("/messages");
        console.log("response", response);
        messages = response.data.data;
    } catch (e) {
        console.log(e);
    }

    return {
        props: {
            messages,
        },
    };
}