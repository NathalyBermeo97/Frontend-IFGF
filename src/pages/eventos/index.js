import styles from "../../styles/events.module.css";
import React from "react";
const url = "https://backend-ifgf.herokuapp.com/";
import { EventModal } from "../../components/EventModal";
import { useState } from "react";
import { Card, Container, Image, Button } from "react-bootstrap";
import Events from '../../api/events'

const Eventos = ({ events }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [event, setEvent] = useState({});

  const onShowModal = (event) => {
    setEvent(event);
    setIsOpen(true);
  };

  return (
    <>
      <Container>
        <div className={styles.events}>
          <h1 className={styles.section}>Eventos</h1>
          <div className={styles.linea}></div>
        </div>
        <Card style={{ width: "18rem" }} className={styles.cardEvent}>
          {events.map((event) => (
            <Card.Body key={event._id}>
              <Card.Title className={styles.title}>{event.title}</Card.Title>
              <Image
                src={url + event.imgURL}
                width={210}
                height={170}
                justifyContent="center"
                className={styles.img}
              />
              <Button
                variant="light"
                className={styles.button}
                onClick={() => onShowModal(event)}
              >
                Más información
              </Button>
            </Card.Body>
          ))}
        </Card>
        <EventModal isOpen={isOpen} event={event} setIsOpen={setIsOpen} />
      </Container>
    </>
  );
};
export default Eventos;

export async function getServerSideProps(context) {
  try {
    const events = await Events.get()
    return {
      props: { events },
    };
  } catch (error) {
    console.log('Something went wrong', e)
  }
}
