import styles from "../../styles/events.module.css";
import React from "react";
const url = "https://backend-ifgf.herokuapp.com/";
import Link from "next/link";
import api from "../../api/api";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {EventModal} from "../../components/Modal";
import { useState } from "react";
import { withPrivate } from "../../hocs/withPrivate";

const Eventos = ({ events }) => {
  console.log({ events });
  const [isOpen, setIsOpen] = useState(false);
  const [event, setEvent] = useState(null)

  console.log({event})
  const onShowModal = (event) => {
    setEvent(event)
    setIsOpen(true)
  }

  console.log({ isOpen });
  return (
    <>
      <Navbar />
      <div>
        <h1>Eventos</h1>
        <table className="table">
          <div className={styles.course}>
            {events.map((event) => (
              <div key={event._id} className={styles.course}>
                <div className={styles.coursecontenido}>
                  <div justifyContent="center" className={styles.name}>
                    {event.title}
                  </div>
                  <div>
                    <img
                      src={url + event.imgURL}
                      width={210}
                      height={170}
                      justifyContent="center"
                      className={styles.imgN}
                    />
                  </div>
                  <div className={styles.description}>{event.description}</div>
                  <div className={styles.ubication}>{event.ubication}</div>
                  <div className={styles.schedule}>{event.schedule}</div>
                  <div className={styles.cost}>{event.cost}</div>
                  <Link
                    variant="contained"
                    color="primary"
                    href={`/eventos/${event._id}`}
                  >
                    <a>Más información</a>
                  </Link>
                  {console.log('id', event._id)}
                  <button onClick={() => onShowModal(event)}>
                    More info
                  </button>
                </div>
              </div>
            ))}
          </div>
        </table>
      </div>
      <Footer />
      <EventModal isOpen={isOpen} event={event} setIsOpen={setIsOpen}/>
    </>
  );
};
export default withPrivate(Eventos);

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
