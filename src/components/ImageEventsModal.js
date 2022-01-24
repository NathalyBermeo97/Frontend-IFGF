import React from "react";
import {Button, Card, Modal} from "react-bootstrap";
const URL = "http://localhost:3030/";

export const ImageEventsModal = ({ isOpen, events, setIsOpen }) => {
    return events ? (
        <Modal show={isOpen} onHide={() => setIsOpen(false)}  >
            <Modal.Header closeButton>
                <Modal.Title>Imagen</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Card style={{ width: "29rem" }}>
                    <Card.Img
                        src={URL+events.imgURL}
                    />
                </Card>
            </Modal.Body>

        </Modal>
    ) : (
        ""
    );
};