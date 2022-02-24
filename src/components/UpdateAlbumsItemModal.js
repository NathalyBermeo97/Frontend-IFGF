import {Button, Modal, InputGroup, FormControl, Form, FormGroup} from "react-bootstrap";
import React from "react";

export const UpdateAlbumsItemModal = ({
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
        <Modal.Title>Albúm de fotos </Modal.Title>
        <br />
      </Modal.Header>
      <Modal.Body>
        <Form id="update-albums-form" onSubmit={handleSubmit(onSubmit)}>
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
          <FormGroup>
            <Form.Label>Imagen</Form.Label>
            <Form.Control
                name="file"
                type="file"
                accept="image/png,image/jpeg"
                {...register("file")}
                isInvalid={!!errors.file?.message}
            />
            <Form.Control.Feedback type="invalid">
              {errors.file?.message}
            </Form.Control.Feedback>
          </FormGroup>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" form="update-albums-form" type="submit">
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
