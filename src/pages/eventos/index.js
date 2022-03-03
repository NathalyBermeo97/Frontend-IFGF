import styles from "./styles.module.css";
import { EventModal } from "../../components/EventModal";
import React, { useState } from "react";
import { Container, FormControl, InputGroup } from "react-bootstrap";
import Events from "../../api/events";
import { ListOfEvents } from "../../components/ListOfEvents";
import { useFilter } from "../../hooks/useFilter";

const Eventos = ({ events }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [event, setEvent] = useState({});
  const [eventsState, setEventsState] = useState(events);
  const { newItems: filteredEvents, registerInput } = useFilter(eventsState);

  const onShowModal = (event) => {
    setEvent(event);
    setIsOpen(true);
  };
  console.log({filteredEvents})

  return (
    <Container>
      <div className={styles.events}>
        <h1 className={styles.section}>Eventos</h1>
        <div className={styles.linea}></div>
      </div>
      <div className={styles.info}>
        <p>
          En esta sección puede visualizar información referente a los eventos
          de la Iglesia IFGF
        </p>
      </div>
      <InputGroup style={{ padding: "15px" }}>
        <FormControl
          placeholder="Buscar evento"
          aria-label="search_new"
          aria-describedby="basic-addon1"
          {...registerInput("title")}
        />
      </InputGroup>
      <ListOfEvents events={filteredEvents} onShowModal={onShowModal} />
      <EventModal
        isOpen={isOpen}
        event={event}
        setIsOpen={setIsOpen}
        setEventsState={setEventsState}
      />
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
  } catch (e) {
    console.log("Something went wrong", e);
  }
}
