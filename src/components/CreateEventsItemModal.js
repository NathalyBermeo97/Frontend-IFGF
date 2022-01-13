import React from "react";
import { Button, Modal, Form, InputGroup } from "react-bootstrap";

export const CreateEventsItemModal = ({
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
        <Modal.Title>Eventos</Modal.Title>
        <br />
      </Modal.Header>
      <Modal.Body>
        <Form id="create-events-form" onSubmit={handleSubmit(onSubmit)}>
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
            <Form.Label>Ubicación</Form.Label>
            <Form.Control
              style={{ height: "50px" }}
              as="textarea"
              type="text"
              placeholder="Ingresar la ubicación del evento "
              {...register("ubication")}
              isInvalid={!!errors.ubication?.message}
            />
            <Form.Control.Feedback type="invalid">
              {errors.ubication?.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Horario</Form.Label>
            <Form.Control
              style={{ height: "50px" }}
              as="textarea"
              type="text"
              placeholder="Ingresar el horario del evento"
              {...register("schedule")}
              isInvalid={!!errors.schedule?.message}
            />
            <Form.Control.Feedback type="invalid">
              {errors.schedule?.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Costo</Form.Label>
            <Form.Control
              style={{ height: "50px" }}
              as="textarea"
              type="text"
              placeholder="Ingresar el costo del evento"
              {...register("cost")}
              isInvalid={!!errors.cost?.message}
            />
            <Form.Control.Feedback type="invalid">
              {errors.cost?.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Límite de personas</Form.Label>
            <Form.Control
              style={{ height: "50px" }}
              type="number"
              placeholder="Ingresar el límite de personas"
              {...register("number")}
              isInvalid={!!errors.number?.message}
            />
            <Form.Control.Feedback type="invalid">
              {errors.number?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button form="create-events-form" variant="primary" type="submit">
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
