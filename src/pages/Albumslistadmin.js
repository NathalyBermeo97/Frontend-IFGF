import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../styles/cards.module.css";

const url="https://backend-ifgf.herokuapp.com";

const Albumslistadmin = ({albums}) => {
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
            {albums.map(album =>(
                <tr key={album.id}>
                    <th>{album.title}</th>
                    <th>{album.description}</th>
                    <th>{album.imgURL}</th>



                </tr>

            ))}


            </tbody>
        </table>
    )

}
export default Albumslistadmin;
export async function getStaticProps(){
    const response = await fetch ("https://backend-ifgf.herokuapp.com/api/albums")
    const data= await response.json()
    console.log(data)

    return{
        props:{
            albums:data,
        },
    }
}