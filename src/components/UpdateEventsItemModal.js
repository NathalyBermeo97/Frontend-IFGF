import { Button, Modal, Form } from "react-bootstrap";

export const UpdateEventsItemModal = ({
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
        <Modal.Title>Eventos</Modal.Title>
        <br />
      </Modal.Header>
      <Modal.Body>
        <Form id="update-events-form" onSubmit={handleSubmit(onSubmit)}>
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
              {...register("location")}
              isInvalid={!!errors.location?.message}
            />
            <Form.Control.Feedback type="invalid">
              {errors.location?.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Fecha de entrega</Form.Label>
            <Form.Control
                min="2022-01-25"
                type="date"
                placeholder="Ingrese la fecha de entrega"
                {...register("date")}
                isInvalid={!!errors.date?.message}
            />
            <Form.Control.Feedback type="invalid">
              {errors.date?.message}
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
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button form="update-events-form" variant="primary" type="submit">
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
