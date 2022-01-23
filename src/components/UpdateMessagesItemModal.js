import { Button, Modal, InputGroup, FormControl, Form } from "react-bootstrap";
import React from "react";

export const UpdateMessagesItemModal = ({
  show,
  setShowModal,
  register,
  handleSubmit,
  onSubmit,
  errors,
}) => {
  const handleClose = () => setShowModal(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Mensaje Biblico</Modal.Title>
        <br />
      </Modal.Header>
      <Modal.Body>
        <Form id="update-messages-form" onSubmit={handleSubmit(onSubmit)}>
          <InputGroup>
            <InputGroup.Text>Título</InputGroup.Text>
            <FormControl
              as="textarea"
              aria-label="With textarea"
              style={{ height: "50px" }}
              {...register("title")}
              isInvalid={!!errors.title?.message}
            />
            <Form.Control.Feedback type="invalid">
              {errors.title?.message}
            </Form.Control.Feedback>
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroup.Text>Descripción</InputGroup.Text>
            <FormControl
              as="textarea"
              aria-label="With textarea"
              style={{ height: "80px" }}
              {...register("description")}
              isInvalid={errors.description?.message}
            />
            <Form.Control.Feedback type="invalid">
              {errors.description?.message}
            </Form.Control.Feedback>
          </InputGroup>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" form="update-messages-form" type="submit">
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
