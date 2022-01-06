import styles from "../styles/indexHome.module.css";
import Carousel from "../components/Carousel";
import News from "../components/News";
import Messages from "../components/Messages";
import Albums from "../components/Albums";
import React from "react";
import Link from "next/link";
import { useNews } from "../hooks/useNews";
import { useAlbums } from "../hooks/useAlbums";
import { useMessages } from "../hooks/useMessages";
import { Col, Row } from "react-bootstrap";
import CarouselEventos from "../components/CarouselEventos";

const Home = ({}) => {
  const { news } = useNews();
  const {messages} = useMessages();
  const {albums} = useAlbums();

  return (
    <>
      <Carousel />
      <div className={styles.events}>
        <h1 className={styles.section}>Conoce nuestros eventos</h1>
        <div className={styles.linea}></div>
      </div>
      <Row>
        <Col xs={8}>
          <h1 className={styles.infoeventos}>
            Comparte con la comunidad de la iglesia asistiendo a nuestros
            eventos
          </h1>
          <div className={styles.infoeventos}>
            <Link href="/eventos">
              <button type="button" className="btn btn-info">
                Ir a eventos
              </button>
            </Link>
          </div>
        </Col>
        <Col xs={4} className={styles.carruselevent}>
          <CarouselEventos />
        </Col>
      </Row>
      <div className={styles.news}>
        <h1 className={styles.section}>Entérate de nuestras noticias</h1>
        <div className={styles.linea}></div>
      </div>
      <div className="container">
        <News news={news} />
      </div>
      <div className="container"><Messages messages={messages} /></div>
      <div className="container"><Albums albums={albums} /></div>
    </>
  );
};
export default Home
