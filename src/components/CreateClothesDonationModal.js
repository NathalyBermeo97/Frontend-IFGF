import React from "react";
import { useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";

export const CreateClothesDonationModal = ({
  showModal,
  setShowModal,
  register,
  handleSubmit,
  onSubmit,
  errors,
  clearErrors,
  reset,
  watch,
  setValue,
}) => {
  const handleClose = () => {
    setShowModal(false);
    clearErrors();
    reset();
  };

  const selectValue = watch("delivery");
  console.log({ selectValue });
  useEffect(() => {
    if (selectValue === "Picking up At House") {
      setValue("direction", "");
    } else {
      setValue("direction", "no direction ".repeat(2));
    }
  }, [selectValue]);

  console.log(errors.direction?.message)
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Donación de ropa</Modal.Title>
        <br />
      </Modal.Header>
      <Modal.Body>
        <Form id="create-news-form" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Tipo de donación</Form.Label>
            <Form.Control {...register("type")} disabled />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Tipo de entrega</Form.Label>
            <Form.Select
              aria-label="Default select example"
              {...register("delivery")}
              isInvalid={!!errors.delivery?.message}
            >
              <option value="Delivery in Church">
                Ir a entregar en la Iglésia personalemente
              </option>
              <option value="Delivery in Church via some service">
                Enviar a la iglésia por ServiEntrega
              </option>
              <option value="Picking up At House">
                Ser recogido en el hogar
              </option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.delivery?.message}
            </Form.Control.Feedback>
          </Form.Group>
          {selectValue === "Picking up At House" ? (
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                style={{ height: "50px" }}
                as="textarea"
                type="text"
                placeholder="Ingresa su dirección"
                {...register("location")}
                isInvalid={!!errors.location?.message}
                isValid={!errors.location?.message}
              />
              <Form.Control.Feedback type="invalid">
                {errors.direction?.message}
              </Form.Control.Feedback>
              <Form.Control.Feedback type="valid">
                Escribe tú dirección lo más exacta posible
              </Form.Control.Feedback>
            </Form.Group>
          ) : (
            ""
          )}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Fecha de entrega</Form.Label>
            <Form.Control
              type="date"
              placeholder="Ingrese la fecha de entrega"
              {...register("date")}
              isInvalid={!!errors.date?.message}
            />
            <Form.Control.Feedback type="invalid">
              {errors.date?.message}
            </Form.Control.Feedback>
          </Form.Group>
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