import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Informacionlistadmin = ({informaciones}) => {
    return (

        <table className="table">
            <thead>
            <tr>
                <th>Título</th>
                <th>Descripción</th>


            </tr>

            </thead>
            <tbody>
            {informaciones.map(item =>(
                <tr key={item.id}>
                    <th>{item.title}</th>
                    <th>{item.description}</th>



                </tr>

            ))}


            </tbody>
        </table>
    )

}
export default Informacionlistadmin;
export async function getStaticProps(){
    const response = await fetch ("https://backend-ifgf.herokuapp.com/api/news")
    const data= await response.json()
    console.log(data)

    return{
        props:{
            informaciones:data,
        },
    }
}