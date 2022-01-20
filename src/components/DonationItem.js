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

        <Card.Img
            src={URL+donation.imgURL}
        />
        <Card.Body>
          <Card.Title>Donación de {donation.type}</Card.Title>
          <Card.Text>

            <p>Estado:{" "}
            {donation.status === "undefined" ? (
              <Badge bg="secondary">Sin definir</Badge>
            ) : (
              <Badge bg={bg}>{donation.status}</Badge>
            )}</p>
            <p style={{fontWeight: 'bold'}}>Descripción:</p><p> {donation.description}</p>
            <p style={{fontWeight: 'bold'}}>Entrega:</p><p> {donation.delivery} </p>
            <p style={{fontWeight: 'bold'}}>Dirección:</p><p> {donation.address} </p>
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
