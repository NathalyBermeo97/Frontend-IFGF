import React, { Component } from 'react';
import axios from 'axios';
import {useEffect,useState} from "react";
import {Image} from "@mui/icons-material";
import {Button, Link} from "@material-ui/core";
import styles from "../styles/courses.module.css";

const News = () => {

    const [news, setnews] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('https://backend-ifgf.herokuapp.com/api/news')
                console.log('response', response);
                setnews(response.data)
            } catch (e) {

            }
        };
        getData();
    }, []);

    return(
        <div className={styles.body}>
            <div className={styles.courses}>
                {news.map((item) => (
                    <div key={item.id} className={styles.course}>
                        <div className={styles.coursecontenido}>
                            <Link href={`/news/${item.id}`}>
                                <h2 className={styles.name}>{item.name}</h2>
                            </Link>

                            <Link href={`/news/${item.id}`}>
                                <Image
                                    src={item.image}
                                    width={300}
                                    height={200}
                                    justifyContent="center"
                                />
                            </Link>

                            <div className={styles.description}>{item.description}</div>
                            <Button
                                variant="contained"
                                color="primary"
                                href={`/news/${item.id}`}
                            >
                                Más información
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

        </div>

    )


}
export default News;