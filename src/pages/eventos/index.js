import styles from "../../styles/events.module.css";
import React from "react";
const url = "https://backend-ifgf.herokuapp.com/";
import Link from "next/link"
import api from "../../api/api";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Eventos = ({ events }) => {

    console.log({events})
    return(
        <>
            <Navbar />
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
                                    <Link
                                        variant="contained"
                                        color="primary"
                                        href={`../eventos/${event.id}`}

                                    >
                                        <a>Más información</a>
                                    </Link>


                                </div>

                            </div>
                        ))}
                    </div>
                </table>
            </div>
            <Footer/>
        </>

    )
}
export default Eventos;

export async  function getServerSideProps(context) {
    try {
        const peticion = await fetch('https://backend-ifgf.herokuapp.com/api/events')
        const events = await peticion.json()
        return {
            props: {events},
        }
    } catch (error) {

    }
}