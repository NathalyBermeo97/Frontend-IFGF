import styles from "../../styles/events.module.css";
import React from "react";
const url = "https://backend-ifgf.herokuapp.com/";
import { EventModal } from "../../components/EventModal";
import { useState } from "react";
import { Container, Image, Button } from "react-bootstrap";
import Events from "../../api/events";

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
        <div className={styles.courses}>
          {events.map((event) => (
            <div key={event._id} className={styles.course}>
              <div className={styles.coursecontenido}>
                <h2 className={styles.name}>{event.title}</h2>

                <Image
                  src={url + event.imgURL}
                  width={210}
                  height={170}
                  justifyContent="center"
                  className={styles.img}
                />

                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => onShowModal(event)}
                >
                  Más información
                </Button>
              </div>
            </div>
          ))}
        </div>
        <EventModal isOpen={isOpen} event={event} setIsOpen={setIsOpen} />
      </Container>
    </>
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
