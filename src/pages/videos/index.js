import React, { useState, useEffect } from "react";
import styles from "../../styles/style.module.css";
import Videoscards from "../../components/Videoscards";
import { withPrivate } from "../../hocs/withPrivate";
import {FormControl, ListGroup} from "react-bootstrap";

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

    const [keyword, setKeyword] = useState("");
    const [filteredVideos, setFilteredVideos] = useState([]);

    useEffect(() => {
        const filteredVideos = videos.filter((ni) =>
            ni.title.toLowerCase().includes(keyword.toLowerCase())
        );
        setFilteredVideos(filteredVideos);
    }, [keyword, videos]);


    return (
      <body className={styles.body}>
      <div className={styles.form}>
        <div className={styles.events}>
          <h1 className={styles.section}>Videos</h1>
          <div className={styles.linea}></div>
        </div>
          <FormControl
              placeholder="Buscar video"
              aria-label="search_new"
              aria-describedby="basic-addon1"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
          />
      </div>
      <div className="container">
        <Videoscards videos={videos} />
      </div>


    </body>

  );
};

export default withPrivate(Videos);

