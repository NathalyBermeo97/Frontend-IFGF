import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../styles/cards.module.css";
const url = "https://backend-ifgf.herokuapp.com/";
import api from "../api/api";




const News = ({news}) => {
    return (
        <div>
            <h1>Noticias</h1>
            <table className="table">
                <div className={styles.courses}>
                {news.map(item =>(
                    <div key={item.id} className={styles.course}>
                        <div  >
                        <div justifyContent="center" className={styles.name}>{item.title}</div>
                        <div><img src={url+item.imgURL} width={210} height={170}  justifyContent="center" className={styles.imgN}/></div>
                        <div className={styles.description}>{item.description}</div>
                  
                    </div>
                        
                    </div>
                ))}
                </div>
            </table>
        </div>
    )

}
export default News;
export async function getStaticProps() {
    let news = [];
    try {
      const response = await api.get("news");
      console.log("response", response);
      news = response.data.data;
    } catch (e) {
      console.log(e);
    }
  
    return {
      props: {
        news,
      },
    };
  }
