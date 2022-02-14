import { useRouter } from "next/router";
import { Button, Modal } from "react-bootstrap";
import { ROUTES } from "../../constants/routes";
import { useAuth } from "../../context/AuthContext";
import { useEvents } from "../../hooks/useEvents";
import swal from "sweetalert";

export const EventModal = ({ isOpen, event, setIsOpen, onCancelInscription }) => {
  const { createInscription, calloffInscription, setEvents } = useEvents();
  const { currentUser } = useAuth();
  const router = useRouter();
  const isInTheLimit = event?.inscriptions?.length === event.number;
  const isDisabled =
    event.inscriptions?.includes(currentUser?._id) || isInTheLimit;

  const handleCreateInscription = () => {
    if (!currentUser) {
      return router.push(ROUTES.LOGIN);
    }
    const { _id: event_id } = event;
    createInscription(event_id)
      .then((res) => {
        console.log(res);
        if (res?.data?.message) {
          setIsOpen(false);
        }
        swal("Usted se ha inscrito al evento con éxito")
      })
      .catch((e) => console.log("something went wrong", e));
  };

  return (
    <Modal show={isOpen} onHide={() => setIsOpen(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{event.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>🌎Ubicación: {event.location}</p>
          <p>📅 Fecha: {event.date}</p>
        <p>🕘 Hora: {event.schedule}</p>
        <p>💰 Costo: {event.cost}</p>
        <p>👩‍👩‍👦‍👦 Número de personas inscritas: {event.inscriptions?.length}</p>
        <p>🔢 Aforo permitido: {event.number}</p>
        <p>🔠 {event.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setIsOpen(false)}>
          Cerrar
        </Button>
        {router.pathname === ROUTES.EVENTS ? (
          <Button
            variant="primary"
            onClick={handleCreateInscription}
            disabled={isDisabled}
          >
            {isDisabled
              ? isInTheLimit
                ? "Sin cupones"
                : "Inscrito"
              : "Inscribirse"}
          </Button>
        ) : (
          <Button variant="primary" onClick={onCancelInscription} >
            Cancelar Inscripción
          </Button>

        )}
      </Modal.Footer>
    </Modal>
  );
};
