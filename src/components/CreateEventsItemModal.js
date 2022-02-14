import { Button, Modal, Form } from "react-bootstrap";

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
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              style={{ height: "50px" }}
              as="textarea"
              type="text"
              placeholder="Ingresar la dirección del evento "
              {...register("location")}
              isInvalid={!!errors.location?.message}
            />
            <Form.Control.Feedback type="invalid">
              {errors.location?.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Fecha </Form.Label>
            <Form.Control
              min="2022-02-14"
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
            <Form.Label>
              <p>
                El horario de eventos es a partir de las 10:00 AM hasta 19:00 PM
              </p>
            </Form.Label>
            <Form.Control
              style={{ height: "50px" }}
              type="time"
              min="10:00"
              max="19:00"
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
            <Form.Label>Aforo permitido de personas</Form.Label>
            <Form.Control
              style={{ height: "50px" }}
              type="number"
              max="30"
              placeholder="Ingresar el límite de personas"
              {...register("number")}
              isInvalid={!!errors.number?.message}
            />
            <Form.Control.Feedback type="invalid">
              {errors.number?.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Imagen</Form.Label>
            <Form.Control
              name="file"
              type="file"
              accept="image/png,image/jpeg"
              {...register("file")}
            />
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
