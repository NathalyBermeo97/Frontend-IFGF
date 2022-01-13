import { Badge, Button, Card, Col } from "react-bootstrap";
import { USER_ROLES } from "../constants/userRoles";
import { useAuth } from "../context/AuthContext";

export const DonationItem = ({ donation, onShowModal }) => {
  console.log({ donation });
  const { role } = useAuth();
  const bg = donation.status === "aceptado" ? "success" : "danger";
  const disabledAcction =
    donation.status === "aceptado" || donation.status === "denegado";
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
          src="https://miro.medium.com/max/1200/1*4XRAX4obUOvMVqWibVCneQ.jpeg"
        />
        <Card.Body>
          <Card.Title>Donación de {donation.type}</Card.Title>
          <Card.Text>
            {role === USER_ROLES.ADMIN ? `Por: ${donation?.user_id}` : ""}
            <p>Estado:{" "}
            {donation.status === "undefined" ? (
              <Badge bg="secondary">Sin definir</Badge>
            ) : (
              <Badge bg={bg}>{donation.status}</Badge>
            )}</p>
            <p>{donation.description}</p>
            {donation.message ? (
              <>
                <p style={{fontWeight: 'bold'}}>Comentario de retroalimentación:</p>
                <p>{donation.message}</p>
              </>
            ) : (
              ""
            )}
          </Card.Text>
          {role === USER_ROLES.ADMIN ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "0px 5px",
              }}
            >
              <Button
                variant="success"
                id="aceptado"
                disabled={disabledAcction}
                onClick={() => onShowModal(donation)}
              >
                Retroalimentar
              </Button>
            </div>
          ) : (
            ""
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};
