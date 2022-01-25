import React from "react";
import {Button, Card, Modal} from "react-bootstrap";
const URL = "https://backend-ifgf.herokuapp.com/";

export const ImageNewsModal = ({ isOpen, news, setIsOpen }) => {
    return news ? (
        <Modal show={isOpen} onHide={() => setIsOpen(false)}  >
            <Modal.Header closeButton>
                <Modal.Title>Imagen</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Card style={{ width: "29rem" }}>
                    <Card.Img
                        src={URL+news.imgURL}
                    />
                </Card>
            </Modal.Body>

        </Modal>
    ) : (
        ""
    );
};