import { useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";

export const CreateDonationModal = ({
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
  donationType,
}) => {
  const handleClose = () => {
    setShowModal(false);
    clearErrors();
    reset();
  };

  const selectValue = watch("delivery");
  useEffect(() => {
    if (selectValue === "retiro en el hogar") {
      setValue("address", "");
    }else{
      setValue('address', 'no direction no direction ')
    }
  }, [selectValue]);

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Donación de {donationType}</Modal.Title>
        <br />
      </Modal.Header>
      <Modal.Body>
        <Form id="create-news-form" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Tipo de donación</Form.Label>
            <Form.Control {...register("type")} disabled />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Tipo de entrega</Form.Label>
            <Form.Select
              aria-label="Default select example"
              {...register("delivery")}
              isInvalid={!!errors.delivery?.message}
            >
              <option value="entrega en iglesia">
                Donar en la Iglesia personalmente
              </option>
              {donationType === "dinero" && (
                <option value="entrega vía transacción">
                  Donar a la Iglesia por transacción
                </option>
              )}
              <option value="retiro en el hogar">
                Donar desde el hogar
              </option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.delivery?.message}
            </Form.Control.Feedback>
          </Form.Group>

          {selectValue === "entrega en iglesia" ? (

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
              ):selectValue === "retiro en el hogar" ? (
            <Form.Group className="mb-3">
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                style={{ height: "50px" }}
                as="textarea"
                type="text"
                placeholder="Ingresa su dirección"
                {...register("address")}
                isInvalid={!!errors.address?.message}
                isValid={!errors.address?.message}
              />
              <Form.Control.Feedback type="invalid">
                {errors.address?.message}
              </Form.Control.Feedback>
              <Form.Control.Feedback type="valid">
                Escribe tú dirección lo más exacta posible
              </Form.Control.Feedback>

              <Form.Label>Fecha de entrega</Form.Label>
              <Form.Control
                  min="2022-02-17"
                  type="date"
                  placeholder="Ingrese la fecha de entrega"
                  {...register("date")}
                  isInvalid={!!errors.date?.message}
              />
              <Form.Control.Feedback type="invalid">
                {errors.date?.message}
              </Form.Control.Feedback>
            </Form.Group>

          ) : selectValue === "entrega vía transacción" ? (
            <Form.Group className="mb-3">
              <Form.Label>
                Beneficiario: Iglesia IFGF
              </Form.Label>
              <br/>
              <Form.Label>
                Banco: Pichincha
              </Form.Label>
              <br/>
              <Form.Label>
                Tipo de cuenta: Cuenta Corriente
              </Form.Label>
              <br/>
              <Form.Label>
                Número de cuenta: 3022575104
              </Form.Label>
              <Form.Label>
                Número de cuenta: 3022575104
              </Form.Label>
              <Form.Label>
                Correo: ifgf@gmail.com
              </Form.Label>
              <Form.Label>
                Teléfono: 0986754364
              </Form.Label>
            </Form.Group>
          ) : (
            ""
          )}
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
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Imagen de la donación</Form.Label>
            <Form.Control name="file" accept="image/png,image/jpeg" type="file" {...register("file")} />
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
