import styles from "../styles/indexHome.module.css";
import CarouselEventos from "../components/CarouselEventos";
import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import News from "../components/News";
import Messages from "../components/Messages";
import Albums from "../components/Albums";
import React from "react";
import Link from "next/link";
import { useNews } from "../hooks/useNews";
import { useAlbums } from "../hooks/useAlbums";
import { useMessages } from "../hooks/useMessages";


const Home = ({}) => {
  const news = useNews();
  const messages = useMessages();
  const albums = useAlbums();

  return (
    <body className={styles.body}>
      <Navbar />
      <Carousel />
      <div className={styles.events}>
          <h1 className={styles.section}>Conoce nuestros eventos</h1>
          <div className={styles.linea}></div>
      </div>

      <div className="container">
          <div className="row">
              <div className="col-6">
                  <h1 className={styles.infoeventos}>Comparte con la comunidad de la iglesia asistiendo a nuestros  eventos</h1>
                  <div className={styles.infoeventos}>
                      <Link href="/events" >
                          <button type="button" className="btn btn-info">Ir a eventos</button>
                      </Link>
                  </div>
              </div>
              <div className="col-6">
                  <div className={styles.carruselevent}>
                      <CarouselEventos />
                  </div>

              </div>
          </div>
      </div>
      <div className={styles.news}>
        <h1 className={styles.section}>Entérate de nuestras noticias</h1>
        <div className={styles.linea}></div>
      </div>

      <div className="container">
        <News news={news} />
      </div>
      <div className="container">
        <Messages messages={messages} />
      </div>
      <div className="container">
        <Albums albums={albums} />
      </div>

    <Footer/>
    </body>
  );
};
export default Home;
