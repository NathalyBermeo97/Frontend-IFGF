import React, { useEffect, useState } from "react";
import { EventModal } from "../../components/EventModal";
import { ListOfEvents } from "../../components/ListOfEvents";
import { withPrivate } from "../../hocs/withPrivate";
import { useEvents } from "../../hooks/useEvents";
import styles from "../../styles/indexHome.module.css";
import { FormControl, InputGroup } from "react-bootstrap";
import swal from "sweetalert";

const MyEventsPage = () => {
  const { userEvents, setEvents, calloffInscription } = useEvents();
  const [isOpen, setIsOpen] = useState(false);
  const [event, setEvent] = useState({});
  const [keyword, setKeyword] = useState("");
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    const filteredEvents = userEvents?.filter((ni) =>
      ni.title.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredEvents(filteredEvents);
  }, [keyword, userEvents]);

  const onShowModal = (event) => {
    setEvent(event);
    setIsOpen(true);
  };

  const onCancelInscription = () => {
    const { _id: event_id } = event;
    calloffInscription(event_id)
      .then((newEvent) => {
        setEvents((prevEvents) =>
          prevEvents.filter((event) => event._id !== newEvent._id)
        );
        setIsOpen(false);
        swal("Ha cancelado la inscripción al evento");
      })
      .catch((e) => console.log("something went wrong", e));
  };

  if (userEvents.length === 0)
    return (
      <h2 style={{ display: "flex", justifyContent: "center" }}>
        SIN EVENTOS REGISTRADOS
      </h2>
    );
  return (
    <>
      <div>
        <h1 className={styles.section}>Mis eventos</h1>
        <div className={styles.linea}></div>
        <br />
      </div>
      <div className={styles.info}>
        <p>
          En esta sección puede visualizar los eventos a los que se ha incrito
          en la Iglesia IFGF
        </p>
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
      <br />
      <ListOfEvents events={filteredEvents} onShowModal={onShowModal} />;
      <EventModal
        isOpen={isOpen}
        event={event}
        setIsOpen={setIsOpen}
        onCancelInscription={onCancelInscription}
      />
    </>
  );
};

export default withPrivate(MyEventsPage);
