import { Button, Modal } from "react-bootstrap";

export const ConfirmModal = ({isOpen, item, confirm, setIsOpen}) => {
  return (
    <Modal show={isOpen} onHide={() => setIsOpen(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Eliminar {item}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>¿Esta seguro que desea eliminar el item {item}?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setIsOpen(false)}>
          Cerrar
        </Button>
        <Button variant="danger" onClick={() => confirm()}>
          Confirmar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
