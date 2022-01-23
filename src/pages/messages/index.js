import React from "react";
import { useMessages } from "../../hooks/useMessages";
import { Col, Row, Button, Container, Card } from "react-bootstrap";
import styles from "../../styles/events.module.css";
import Messages from "../../components/Messages";
const url = "https://backend-ifgf.herokuapp.com/";

const HomeMessages = ({}) => {
    const { messages } = useMessages();

    return (
        <>
            <div className={styles.news}>
                <h1 className={styles.section}>Mensajes bíblicos</h1>
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
                        <Messages messages={messages} />
                    </Col>
                </Row>
            </Container>
        </>
    );
};
export default HomeMessages;
