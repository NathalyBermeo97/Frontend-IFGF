import styles from "./styles.module.css";
import React, {useEffect} from "react";
import { EventModal } from "../../components/EventModal";
import { useState } from "react";
import {Container, FormControl, InputGroup} from "react-bootstrap";
import Events from "../../api/events";
import { ListOfEvents } from "../../components/ListOfEvents";

const Eventos = ({ events }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [event, setEvent] = useState({});
  const [keyword, setKeyword] = useState("");
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    const filteredEvents = events?.filter((ni) =>
        ni.title.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredEvents(filteredEvents);
  }, [keyword, events]);

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
      <InputGroup style={{ padding: "15px" }}>
        <FormControl
            placeholder="Buscar evento"
            aria-label="search_new"
            aria-describedby="basic-addon1"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
        />
      </InputGroup>
      <ListOfEvents events={filteredEvents} onShowModal={onShowModal} />
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
  } catch (e) {
    console.log("Something went wrong", e);
  }
}
