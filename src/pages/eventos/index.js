import styles from "../../styles/events.module.css";
import React from "react";
const url = "https://backend-ifgf.herokuapp.com/";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { EventModal } from "../../components/Modal";
import { useState } from "react";
import { Card, Container, Image, Button } from "react-bootstrap";


const Eventos = ({ events }) => {
  console.log({ events });
  const [isOpen, setIsOpen] = useState(false);
  const [event, setEvent] = useState(null);

  console.log({ event });
  const onShowModal = (event) => {
    setEvent(event);
    setIsOpen(true);
  };

  console.log({ isOpen });
  return (
    <>
      <Navbar />
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
              <EventModal isOpen={isOpen} event={event} setIsOpen={setIsOpen} />
            </Card.Body>
          ))}
        </Card>
      </Container>
      <Footer />
    </>
  );
};
export default Eventos;

export async function getServerSideProps(context) {
  try {
    const peticion = await fetch(
      "https://backend-ifgf.herokuapp.com/api/events"
    );
    const events = await peticion.json();
    return {
      props: { events },
    };
  } catch (error) {}
}
