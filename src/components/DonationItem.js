import { Badge, Button, Card, Col } from "react-bootstrap";
import { USER_ROLES } from "../constants/userRoles";
import { useAuth } from "../context/AuthContext";
const URL = "http://localhost:3030/";
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
        <Card.Img src={URL + donation.imgURL} />
        <Card.Body>
          <Card.Title>Donación de {donation.type}</Card.Title>
          <Card.Text>
            Estado:{" "}
            {donation.status === "undefined" ? (
              <Badge bg="secondary">Sin definir</Badge>
            ) : (
              <Badge bg={bg}>{donation.status}</Badge>
            )}
          </Card.Text>
          <Card.Text style={{ fontWeight: "bold" }}>Descripción:</Card.Text>
          <Card.Text> {donation.description}</Card.Text>
          <Card.Text style={{ fontWeight: "bold" }}>Entrega:</Card.Text>
          <Card.Text> {donation.delivery} </Card.Text>
          <Card.Text style={{ fontWeight: "bold" }}>Dirección:</Card.Text>
          <Card.Text> {donation.address} </Card.Text>
          {donation.message ? (
            <>
              <Card.Text style={{ fontWeight: "bold" }}>
                Comentario de retroalimentación:
              </Card.Text>
              <Card.Text>{donation.message}</Card.Text>
            </>
          ) : (
            ""
          )}
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
