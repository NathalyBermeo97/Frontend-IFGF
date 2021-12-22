import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/cards.module.css";
const url = "https://backend-ifgf.herokuapp.com/";
import api from "../api/api";

const Albums = ({ albums }) => {
  return (
    <div>
      <h1>Albums</h1>
      <table className="table">
        <div className={styles.courses}>
          {albums.map((album) => (
            <div key={albums.id} className={styles.course}>
              <div className={styles.coursecontenido}>
                <div justifyContent="center" className={styles.name}>
                  {album.title}
                </div>
                <div>
                  <img
                    src={url + album.imgURL}
                    width={210}
                    height={170}
                    justifyContent="center"
                    className={styles.img}
                  />
                </div>
                <div className={styles.description}>{album.description}</div>
              </div>
            </div>
          ))}
        </div>
      </table>
    </div>
  );
};
export default Albums;
export async function getStaticProps() {
  let albums = [];
  try {
    const response = await api.get("albums");
    console.log("response", response);
    albums = response.data.data;
  } catch (e) {
    console.log(e);
  }

  return {
    props: {
      albums,
    },
  };
}
