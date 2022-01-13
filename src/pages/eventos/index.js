import styles from "./styles.module.css";
import React from "react";
import { EventModal } from "../../components/EventModal";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Events from "../../api/events";
import { ListOfEvents_ } from "../../components/ListOfEvents_";

const Eventos = ({ events }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [event, setEvent] = useState({});

  const onShowModal = (event) => {
    setEvent(event);
    setIsOpen(true);
  };

  return (
    <Container>
      <div className={styles.events}>
        <h1 className={styles.section}>Eventos</h1>
        <div className={styles.linea}></div>
      </div>
      <ListOfEvents_ events={events} onShowModal={onShowModal} />
      <EventModal isOpen={isOpen} event={event} setIsOpen={setIsOpen} />
    </Container>
  );
};
export default Eventos;

export async function getServerSideProps(context) {
  try {
    const events = await Events.get();
    return {
      props: { events },
    };
  } catch (error) {
    console.log("Something went wrong", e);
  }
}
