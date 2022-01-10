import { Badge, Button, Card, ListGroup } from "react-bootstrap";

export const ListOfDonations = ({ donation, onShowModal, handleDelete, updateDonation }) => {
  const bg = donation.status === "aceptado" ? "success" : "danger";
  const disabledAcction = donation.status === 'aceptado' || donation.status === 'denegado'
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://miro.medium.com/max/1200/1*4XRAX4obUOvMVqWibVCneQ.jpeg"
      />
      <Card.Body>
        <Card.Title>Donación de {donation.type}</Card.Title>
        <Card.Text>
          Estado{" "}
          {donation.status === "undefined" ? (
            <Badge bg="secondary">Sin definir</Badge>
          ) : (
            <Badge bg={bg}>{donation.status}</Badge>
          )}
          <br />
          {donation.description}
        </Card.Text>
        <section style={{display: 'flex', gap: '0px 5px'}}>
          <Button variant="success" id='aceptado' disabled={disabledAcction} onClick={({target}) => updateDonation(target.id, donation)}>Aceptar</Button>
          <Button variant="warning" id='denegado' disabled={disabledAcction} onClick={({target}) => updateDonation(target.id, donation)}>Denegar</Button>
          <Button variant="info">Ver</Button>
        </section>
      </Card.Body>
    </Card>
  );
};
