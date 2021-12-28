import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Modal, InputGroup, FormControl } from "react-bootstrap";
import api from "../api/api";
import { useNews } from "../hooks/useNews";

export const NewsModal = ({
  show,
  setShowModal,
  handleClose,
  handleSave,
  newsItem,
  setData,
}) => {
  const { news, updateNews, setNews } = useNews();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setTitle(newsItem.title);
    setDescription(newsItem.description);
  }, [newsItem]);
  
  useEffect(() => {
    setData({ _id: newsItem._id, title, description });
  }, [newsItem, title, description]);

  // const handleSave = () => {
  //   const data = { id: newsItem._id, title, description };
  //   // updateNews(data).then((response) => {
  //   //   if (
  //   //     response &&
  //   //     response.data.message === "Noticia actualizada correctamente"
  //   //   ) {
  //   //     const newNews = news.map((newsitem) =>
  //   //       newsitem._id === newsItem._id ? data : newsitem
  //   //     );
  //   //     setNews(newNews);
  //   //     setShowModal(false);
  //   //   }
  //   // });
  //   // const newNews = news.map((newsitem) =>
  //   //   newsitem._id === newsItem._id ? data : newsitem
  //   // );
  //   setNews([newsItem]);
  //   setShowModal(false);
  // };

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
