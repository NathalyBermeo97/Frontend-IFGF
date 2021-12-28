import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Modal, InputGroup, FormControl } from "react-bootstrap";
import api from "../api/api";
import { useNews } from "../hooks/useNews";

export const NewsModal = ({
  show,
  handleClose,
  handleSave,
  newsItem,
  setData,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setTitle(newsItem.title);
    setDescription(newsItem.description);
  }, [newsItem]);
  
  useEffect(() => {
    setData({ _id: newsItem._id, title, description });
  }, [newsItem, title, description]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Noticia</Modal.Title>
        <br />
      </Modal.Header>
      <Modal.Body>
        <InputGroup>
          <InputGroup.Text>Título</InputGroup.Text>
          <FormControl
            as="textarea"
            aria-label="With textarea"
            style={{ height: "50px" }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </InputGroup>
        <br />
        <InputGroup>
          <InputGroup.Text>Descripción</InputGroup.Text>
          <FormControl
            as="textarea"
            aria-label="With textarea"
            value={description}
            style={{ height: "80px" }}
            onChange={(e) => setDescription(e.target.value)}
          />
        </InputGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
