import styles from "./styles.module.css";
import { EventModal } from "../../components/EventModal";
import { useState } from "react";
import {Container, FormControl, InputGroup} from "react-bootstrap";
import Events from "../../api/events";
import { ListOfEvents } from "../../components/ListOfEvents";
import { useFilter } from "../../hooks/useFilter";

const Eventos = ({ events }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [event, setEvent] = useState({});
  const {newItems: filteredEvents, registerInput} = useFilter(events, 'title')

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
            {...registerInput('BuscarEventos')}
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
