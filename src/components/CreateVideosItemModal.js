import React from "react";
import {Button, Modal, Form, InputGroup, FormSelect} from "react-bootstrap";

export const CreateVideosItemModal = ({
  showModal,
  setShowModal,
  register,
  handleSubmit,
  onSubmit,
  errors,
  clearErrors,
}) => {
  const handleClose = () => {
    setShowModal(false);
    clearErrors();
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Videos</Modal.Title>
        <br />
      </Modal.Header>
      <Modal.Body>
        <Form id="create-videos-form" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Título</Form.Label>
            <Form.Control
              style={{ height: "50px" }}
              as="textarea"
              type="text"
              placeholder="Ingresar título"
              {...register("title")}
              isInvalid={!!errors.title?.message}
            />
            <Form.Control.Feedback type="invalid">
              {errors.title?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              style={{ height: "50px" }}
              as="textarea"
              type="text"
              placeholder="Ingresar descripción"
              {...register("description")}
              isInvalid={!!errors.description?.message}
            />
            <Form.Control.Feedback type="invalid">
              {errors.description?.message}
            </Form.Control.Feedback>
          </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Tipo</Form.Label>
                <FormSelect
                    style={{ height: "50px" }}
                    as="textarea"
                    type="text"
                    placeholder="Ingresar el tipo de video "
                    {...register("type")}
                    isInvalid={!!errors.type?.message}

                >
                    <option>Tipo de videos</option>
                    <option value="familia">Familia</option>
                    <option value="jovenes">Jóvenes</option>
                    <option value="niños">Niños</option>
                </FormSelect>
                <Form.Control.Feedback type="invalid">
                    {errors.type?.message}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Url</Form.Label>
                <Form.Control
                    style={{ height: "50px" }}
                    as="textarea"
                    type="text"
                    placeholder="Ingresar la url del vídeo"
                    {...register("url")}
                    isInvalid={!!errors.url?.message}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.url?.message}
                </Form.Control.Feedback>
            </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button form="create-videos-form" variant="primary" type="submit">
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
