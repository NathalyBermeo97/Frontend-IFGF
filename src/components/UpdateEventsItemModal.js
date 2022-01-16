import { Button, Modal, Form, Table } from "react-bootstrap";

export const UpdateEventsItemModal = ({
  show,
  setShowModal,
  register,
  handleSubmit,
  onSubmit,
  errors,
  getValues,
}) => {
  const handleClose = () => setShowModal(false);
  const signedInUsers = getValues("inscriptions");

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
        <h5>Usuarios registrados</h5>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Teléfono</th>
            </tr>
          </thead>
          <tbody>
            {signedInUsers?.length > 0 ? (
              signedInUsers.map((user) => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.lastname}</td>
                  <td>{user.cellphone}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} style={{ textAlign: "center" }}>
                  Sin usuarios registrados
                </td>
              </tr>
            )}
          </tbody>
        </Table>
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
