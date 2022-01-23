import React, { useEffect, useState } from "react";
import { EventModal } from "../../components/EventModal";
import { ListOfEvents_ } from "../../components/ListOfEvents_";
import { withPrivate } from "../../hocs/withPrivate";
import { useEvents } from "../../hooks/useEvents";
import styles from "../../styles/indexHome.module.css";
import { FormControl, InputGroup } from "react-bootstrap";

const MyEventsPage = () => {
  const { userEvents } = useEvents();
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
      <ListOfEvents_ events={filteredEvents} onShowModal={onShowModal} />;
      <EventModal isOpen={isOpen} event={event} setIsOpen={setIsOpen} />
    </>
  );
};

export default withPrivate(MyEventsPage);
