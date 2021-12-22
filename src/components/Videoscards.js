import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/videos.module.css";
import api from "../api/api";
import ReactPlayer from "react-player";
import { Card} from "react-bootstrap";



const Videoscards = ({ videos }) => {


  console.log(videos);
  return (
    <>
      <div className={styles.videos}>
        {videos.map((video) => (
          <Card key={video._id} className={styles.cardVideo}>
            <Card.Body>
              <Card.Title className={styles.title}>{video.title}</Card.Title>
              <div>{video.description}</div>
              <div>{video.type}</div>

              <ReactPlayer
                url={video.url}
                className="react-player"
                playing
                controls
                width="40em"
                height="25em"
              />
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};
export default Videoscards;
export async function getStaticProps() {
  let videos = [];
  try {
    const response = await api.get("videos");
    console.log("response", response);
    videos = response.data.data;
  } catch (e) {
    console.log(e);
  }

  return {
    props: {
      videos,
    },
  };
}
