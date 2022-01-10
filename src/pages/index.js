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
import { Col, Row,Button } from "react-bootstrap";
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
              <Button type="button" className={styles.button}>
                Ir a eventos
              </Button>
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
        <div className={styles.events}>
            <h1 className={styles.section}>Vista nuestras instalaciones</h1>
            <div className={styles.linea}></div>
            <br/>
            <br/>
            <div >

                    <iframe
                        className={styles.ubication}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7643285934228!2d-78.45924674973766!3d-0.2980747997814547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d599082e934a23%3A0xe9afca3fb0d1c771!2sIFGF%20Quito!5e0!3m2!1ses!2sec!4v1637617369934!5m2!1ses!2sec"
                        width="300"
                        height="150"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>

            </div>
            <a href='https://web.whatsapp.com/' target="_blank" rel="noopener noreferrer"><bi-facebook/></a>
        </div>
    </>
  );
};
export default Home
