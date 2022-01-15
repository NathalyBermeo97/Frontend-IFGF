import React, { useState } from "react";
import { EventModal } from "../../components/EventModal";
import { ListOfEvents_ } from "../../components/ListOfEvents_";
import { withPrivate } from "../../hocs/withPrivate";
import { useEvents } from "../../hooks/useEvents";

const MyEventsPage = () => {
  const { userEvents } = useEvents();
  const [isOpen, setIsOpen] = useState(false);
  const [event, setEvent] = useState({});

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
      <ListOfEvents_ events={userEvents} onShowModal={onShowModal} />;
      <EventModal isOpen={isOpen} event={event} setIsOpen={setIsOpen} />
    </>
  );
};

export default withPrivate(MyEventsPage);
