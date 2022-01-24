import React from "react";
import {Button, Card, Modal} from "react-bootstrap";
const URL = "http://localhost:3030/";

export const ImageMessagesModal = ({ isOpen, messages, setIsOpen }) => {
    return messages ? (
        <Modal show={isOpen} onHide={() => setIsOpen(false)}  >
            <Modal.Header closeButton>
                <Modal.Title>Imagen</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Card style={{ width: "29rem" }}>
                    <Card.Img
                        src={URL+messages.imgURL}
                    />
                </Card>
            </Modal.Body>

        </Modal>
    ) : (
        ""
    );
};