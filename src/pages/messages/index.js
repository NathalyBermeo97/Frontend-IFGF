import React, { useEffect, useState } from "react";
import { useMessages } from "../../hooks/useMessages";
import {
    Col,
    Row,
    Button,
    Container,
    Card,
    FormControl,
    InputGroup,
} from "react-bootstrap";
import styles from "../../styles/events.module.css";
import MessagePage from "../../components/MessagePage";


const HomeMessages = ({}) => {
    const { messages } = useMessages();
    const [keyword, setKeyword] = useState("");
    const [filteredMessages, setFilteredMessages] = useState([]);

    useEffect(() => {
        const filteredMessages = messages.filter((ni) =>
            ni.title.toLowerCase().includes(keyword.toLowerCase())
        );
        setFilteredMessages(filteredMessages);
    }, [keyword, messages]);

    return (
        <>
            <div className={styles.news}>
                <h1 className={styles.section}>Mensajes bíblicos</h1>
                <div className={styles.linea}></div>
            </div>
            <Container>
                <InputGroup style={{ padding: "15px" }}>
                    <FormControl
                        placeholder="Buscar mensaje bíblico"
                        aria-label="search_new"
                        aria-describedby="basic-addon1"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                </InputGroup>
                <Row
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "15px 0px",
                    }}
                >
                    <Col>
                        <MessagePage messages={filteredMessages} />
                    </Col>
                </Row>
            </Container>
        </>
    );
};
export default HomeMessages;
