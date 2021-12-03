import React from "react";
import styles from '../styles/style.module.css';

const Cards = () => {
    return (

        <section>
            <div className="container" >
                <div className="row">
                    <div className="col-12 col-sm-6">

                        <h1 className={styles.infoeventos}>Comparte con la comunidad de la iglesia asistiendo a nuestros  eventos</h1>

                    </div>

                    <div className="col-12 col-sm-6">
                        <img src="https://ipmark.com/wp-content/uploads/eventos-de-marketing-2021.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                                the cards content.</p>
                            <a href="EventosNologin" className="btn btn-primary">Ir a eventos</a>
                        </div>

                    </div>
                </div>

            </div>
        </section>


    )
}
export default Cards;