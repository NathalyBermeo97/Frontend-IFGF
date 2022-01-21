import React, { useRef, useState, useEffect } from "react";
import styles from "../../styles/style.module.css";
import { withPrivate } from "../../hocs/withPrivate";
import { Videoscards } from "../../components/Videoscards";

const Videos = ({}) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = () => {
      fetch("https://backend-ifgf.herokuapp.com/api/videos")
        .then((res) => res.json())
        .then((res) => setVideos(res));
    };
    getVideos();
  }, []);

  return (
    <body className={styles.body}>
      <div className={styles.form}>
        <div className={styles.events}>
          <h1 className={styles.section}>Videos</h1>
          <div className={styles.linea}></div>
        </div>
      </div>
      <div className="container">
        <Videoscards videos={videos} />
      </div>
    </body>
  );
};

export default withPrivate (Videos);
