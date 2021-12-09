import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../styles/events.module.css";
const url = "https://backend-ifgf.herokuapp.com/";
import api from "../api/api";



const Videoscards = ({videos}) => {
    console.log(videos)
    return (
        <div>
            <h1>Videos</h1>
            <table className="table">
                <div className={styles.course}>
                    {videos.map(video =>(
                        <div key={video.id} className={styles.course}>
                            <div   className={styles.coursecontenido}>
                                <div justifyContent="center" className={styles.name}>{video.title}</div>
                                <div><video src={url+video.url} width={210} height={170}  justifyContent="center" className={styles.imgN}/></div>
                                <div className={styles.description}>{video.description}</div>
                                <div className={styles.ubication}>{video.type}</div>


                            </div>

                        </div>
                    ))}
                </div>
            </table>
        </div>
    )

}
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