import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../styles/cards.module.css";

const url="https://backend-ifgf.herokuapp.com";

const Messagelistadmin = ({messages}) => {
    return (

        <table className="table">
            <thead>
            <tr>
                <th>Título</th>
                <th>Descripción</th>
                <th>Imagen</th>


            </tr>

            </thead>
            <tbody>
            {messages.map(message =>(
                <tr key={message.id}>
                    <th>{message.title}</th>
                    <th>{message.description}</th>
                    <th>{message.imgURL}</th>



                </tr>

            ))}


            </tbody>
        </table>
    )

}
export default Messagelistadmin;
export async function getStaticProps(){
    const response = await fetch ("https://backend-ifgf.herokuapp.com/api/messages")
    const data= await response.json()
    console.log(data)

    return{
        props:{
            messaages:data,
        },
    }
}