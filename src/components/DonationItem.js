import { Badge, Button, Card, Col } from "react-bootstrap";
import { USER_ROLES } from "../constants/userRoles";
import { useAuth } from "../context/AuthContext";

export const DonationItem = ({ donation, updateDonation }) => {
    console.log({donation})
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
            <br />
            Estado:{" "}
            {donation.status === "undefined" ? (
              <Badge bg="secondary">Sin definir</Badge>
            ) : (
              <Badge bg={bg}>{donation.status}</Badge>
            )}
            <br />
            <br />
            {donation.description}
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
                onClick={({ target }) => updateDonation(target.id, donation)}
              >
                Aceptar
              </Button>
              <Button
                variant="warning"
                id="denegado"
                disabled={disabledAcction}
                onClick={({ target }) => updateDonation(target.id, donation)}
              >
                Denegar
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
