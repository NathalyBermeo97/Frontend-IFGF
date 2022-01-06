import React from "react";
import styles from "../../styles/style.module.css";
import Link from "next/link";
import { Button } from "react-bootstrap";

const Videos = () => {
  return (
    <body className={styles.body}>
      <div className={styles.form}>
        <div className={styles.events}>
          <h1 className={styles.section}>Videos</h1>
          <div className={styles.linea}></div>
        </div>
      </div>
      <div className={styles.events}>
        <section>
          <div className={styles.container}>
            <div className="row">
              <div className="col-12 col-sm-4">
                <iframe
                  className={styles.videospage}
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/NNNIAWPPDWw"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className={styles.titledona}>
                  <h5 className="card-title">Videos de la iglesia</h5>
                  <p className="card-text"></p>
                  <Link
                    href="../videos/videosIglesia"
                    className="btn btn-primary"
                  >
                    <Button variant="primary">Ver más</Button>
                  </Link>
                </div>
              </div>
              <div className="col-12 col-sm-4">
                <iframe
                  className={styles.videospage}
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/9IGTvRpGw3s"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className={styles.titledona}>
                  <h5 className="card-title">Videos para jóvenes</h5>
                  <p className="card-text"></p>
                  <Link
                    href="../videos/videosjovenes"
                    className="btn btn-primary"
                  >
                    <Button variant="primary">Ver más</Button>
                  </Link>
                </div>
              </div>
              <div className="col-12 col-sm-4">
                <iframe
                  className={styles.videospage}
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/AmwP1krioik"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className={styles.titledona}>
                  <h5 className="card-title">Videos para niños</h5>
                  <p className="card-text"></p>
                  <Link
                    href="../videos/videosninos"
                    className="btn btn-primary"
                  >
                    <Button variant="primary">Ver más</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </body>
  );
};
export default Videos;
