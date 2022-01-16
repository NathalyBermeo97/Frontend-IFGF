import React from "react";
import { Button, Modal, Form, InputGroup } from "react-bootstrap";

export const CreateGamesItemModal = ({
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
        <Modal.Title>Cuestionario</Modal.Title>
        <br />
      </Modal.Header>
      <Modal.Body>
        <Form id="create-news-form" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              style={{ height: "50px" }}
              as="textarea"
              type="text"
              placeholder="Ingresar el nombre del cuestionario"
              {...register("name")}
              isInvalid={!!errors.name?.message}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              style={{ height: "50px" }}
              as="textarea"
              type="text"
              placeholder="Ingresar un titulo"
              {...register("title")}
              isInvalid={!!errors.title?.message}
            />
            <Form.Control.Feedback type="invalid">
              {errors.title?.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Opcion A</Form.Label>
            <Form.Control
              style={{ height: "50px" }}
              as="textarea"
              type="text"
              placeholder="Ingresar una opcion"
              {...register("opcionA")}
              isInvalid={!!errors.opcionA?.message}
            />
            <Form.Control.Feedback type="invalid">
              {errors.opcionA?.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Opcion B</Form.Label>
            <Form.Control
              style={{ height: "50px" }}
              as="textarea"
              type="text"
              placeholder="Ingresar una opcion"
              {...register("opcionB")}
              isInvalid={!!errors.opcionB?.message}
            />
            <Form.Control.Feedback type="invalid">
              {errors.opcionB?.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Opcion C</Form.Label>
            <Form.Control
              style={{ height: "50px" }}
              as="textarea"
              type="text"
              placeholder="Ingresar una opcion"
              {...register("opcionC")}
              isInvalid={!!errors.opcionC?.message}
            />
            <Form.Control.Feedback type="invalid">
              {errors.opcionC?.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Opcion D</Form.Label>
            <Form.Control
              style={{ height: "50px" }}
              as="textarea"
              type="text"
              placeholder="Ingresar una opcion"
              {...register("opcionD")}
              isInvalid={!!errors.opcionD?.message}
            />
            <Form.Control.Feedback type="invalid">
              {errors.opcionD?.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Respuesta </Form.Label>
            <Form.Control
              style={{ height: "50px" }}
              as="textarea"
              type="text"
              placeholder="Ingresar una respuesta"
              {...register("answer")}
              isInvalid={!!errors.answer?.message}
            />
            <Form.Control.Feedback type="invalid">
              {errors.answer?.message}
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
