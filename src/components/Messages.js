import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/cards.module.css";
const url = "https://backend-ifgf.herokuapp.com/";
import api from "../api/api";

const Messages = ({ messages }) => {
  return (
    <div>
      <h1>Mensajes biblicos</h1>
      <table className="table">
        <div className={styles.courses}>
          {messages.map((message) => (
            <div key={message.id} className={styles.course}>
              <div className={styles.coursecontenido}>
                <div justifyContent="center" className={styles.name}>
                  {message.title}
                </div>
                <div>
                  <img
                    src={url + message.imgURL}
                    width={210}
                    height={170}
                    justifyContent="center"
                    className={styles.img}
                  />
                </div>
                <div className={styles.description}>{message.description}</div>
              </div>
            </div>
          ))}
        </div>
      </table>
    </div>
  );
};
export default Messages;
export async function getStaticProps() {
  let messages = [];
  try {
    const response = await api.get("messages");
    console.log("response", response);
    messages = response.data.data;
  } catch (e) {
    console.log(e);
  }

  return {
    props: {
      messages,
    },
  };
}
