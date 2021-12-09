import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../styles/events.module.css";
const url = "https://backend-ifgf.herokuapp.com/";
import api from "../api/api";
import {Button} from "@material-ui/core"



const Eventoscards = ({events}) => {
  console.log(events)
    return (
        <div>
            <h1>Eventos</h1>
            <table className="table">
                <div className={styles.course}>
                {events.map(event =>(
                    <div key={event.id} className={styles.course}>
                        <div   className={styles.coursecontenido}>
                        <div justifyContent="center" className={styles.name}>{event.title}</div>
                        <div><img src={url+event.imgURL} width={210} height={170}  justifyContent="center" className={styles.imgN}/></div>
                        <div className={styles.description}>{event.description}</div>
                        <div className={styles.ubication}>{event.ubication}</div>
                        <div className={styles.schedule}>{event.schedule}</div>
                        <div className={styles.cost}>{event.cost}</div>
                            <Button
                                variant="contained"
                                color="primary"
                                href={`/eventos/${event.id}`}
                            >
                                Más información
                            </Button>
                  
                    </div>
                   
                    </div>
                ))}
                </div>
            </table>
        </div>
    )

}
export default Eventoscards;
export async function getStaticProps() {
    let events = [];
    try {
      const response = await api.get("events");
      console.log("response", response);
      events = response.data.data;
    } catch (e) {
      console.log(e);
    }
  
    return {
      props: {
        events,
      },
    };
  }