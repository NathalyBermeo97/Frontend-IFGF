import { useRouter } from "next/router";
import { Button, Card, Col } from "react-bootstrap";
import { ROUTES } from "../constants/routes";
import { useAuth } from "../context/AuthContext";

export const EventItem = ({
  event,
  onShowModal,
  onShowEditModal,
  handleDelete,
}) => {
  const router = useRouter();
  const { users } = useAuth();

  const eventUsers = event?.inscriptions?.map((userId) => {
    return users?.find((user) => user._id === userId);
  });

  const newEvent = { ...event, inscriptions: eventUsers };

  return (
    <Col
      style={{
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://zetaoptimization.com/wp-content/uploads/2020/10/Event-social-media.jpg"
        />
        <Card.Body>
          <Card.Title>{event.title}</Card.Title>
          <Card.Text>{event.description}</Card.Text>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0px 5px",
            }}
          >
            {router.pathname.startsWith(ROUTES.ADMIN) ? (
              <>
                <Button size="sm" onClick={() => onShowEditModal(newEvent)}>
                  Editar
                </Button>
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => handleDelete(event._id)}
                >
                  Eliminar
                </Button>
              </>
            ) : (
              <Button onClick={() => onShowModal(event)}>
                Mas información
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};
