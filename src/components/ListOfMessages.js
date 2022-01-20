import React from "react";
import {Button, Container, ListGroup, Row} from "react-bootstrap";
import {MessagesItem} from "./MessagesItem";

export const ListOfMessages = ({ messages, onShowModal,onShowEditModal,handleDelete }) => {
    return(
        <Container>
            <Row
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "15px 0px",
                }}
            >
                {messages?.map((messages) => (
                    <MessagesItem
                        key={messages._id}
                        messages={messages}
                        onShowModal={onShowModal}
                        onShowEditModal={onShowEditModal}
                        handleDelete={handleDelete}
                    />
                ))}
            </Row>
        </Container>
    )
};