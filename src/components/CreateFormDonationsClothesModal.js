import React from "react";
import { Button, Modal, Form, InputGroup } from "react-bootstrap";

export const CreateFormDonationsClothesModal = ({
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
        <Modal.Title>Donación de ropa</Modal.Title>
        <br />
      </Modal.Header>
      <Modal.Body>
        <Form id="create-news-form" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              style={{ height: "50px" }}
              as="textarea"
              type="text"
              placeholder="Ingresa una descripción de la donación"
              {...register("description")}
              isInvalid={!!errors.description?.message}
            />
            <Form.Control.Feedback type="invalid">
              {errors.description?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Tipo de donación</Form.Label>
            <Form.Control
              style={{ height: "50px" }}
              as="textarea"
              type="text"
              placeholder="Ingresa en tipo de donación"
              {...register("type")}
              isInvalid={!!errors.type?.message}
            />
            <Form.Control.Feedback type="invalid">
              {errors.type?.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Tipo de entrega</Form.Label>
            <Form.Control
              style={{ height: "50px" }}
              as="textarea"
              type="text"
              placeholder="Ingresa un tipo de entrega"
              {...register("delivery")}
              isInvalid={!!errors.delivery?.message}
            />
            <Form.Control.Feedback type="invalid">
              {errors.delivery?.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              style={{ height: "50px" }}
              as="textarea"
              type="text"
              placeholder="Ingresa su dirección"
              {...register("direction")}
              isInvalid={!!errors.direction?.message}
            />
            <Form.Control.Feedback type="invalid">
              {errors.direction?.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Fecha de entrega</Form.Label>
            <Form.Control
              style={{ height: "50px" }}
              as="textarea"
              type="text"
              placeholder="Ingrese la fecha de entrega"
              {...register("dateDelivery")}
              isInvalid={!!errors.dateDelivery?.message}
            />
            <Form.Control.Feedback type="invalid">
              {errors.dateDelivery?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button form="create-news-form" variant="primary" type="submit">
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
