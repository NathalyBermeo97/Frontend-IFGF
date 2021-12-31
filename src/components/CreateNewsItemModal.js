import React, { useState } from "react";
import { Button, Modal, InputGroup, FormControl } from "react-bootstrap";
import News from "../api/news";

export const CreateNewsItemModal = ({ showModal, setShowModal }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleClose = () => setShowModal(false);

  const handleSave = () => {
    const newNewsItem = { title, description };
    News.create(newNewsItem).then(response => console.log(response))
  };

  console.log({showModal})
  return (
    <Modal show={showModal} onHide={handleClose}>
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
