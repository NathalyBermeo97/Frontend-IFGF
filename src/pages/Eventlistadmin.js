import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Eventlistadmin = ({events}) => {
    return (


        <div>
            <table className="table">
                <thead>
                <tr>
                    <th>Título</th>
                    <th>Descripción</th>
                    <th>Ubicación</th>
                    <th>Horario</th>
                    <th>Costo</th>

                </tr>

                </thead>
                <tbody>
                {events.map(event =>(
                    <tr key={event.id}>
                        <th>{event.title}</th>
                        <th>{event.description}</th>
                        <th>{event.ubication}</th>
                        <th>{event.schedule}</th>
                        <th>{event.cost}</th>

                    </tr>

                ))}


                </tbody>
            </table>

        </div>

    )

}
export default Eventlistadmin;
export async function getStaticProps(){
    const response = await fetch ("https://backend-ifgf.herokuapp.com/api/events")
    const data= await response.json()
    console.log(data)

    return{
        props:{
            events:data,
        },
    }
}