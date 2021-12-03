import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {string} from "prop-types";

const Eventformadmin = ({event,setEvent}) => {
    const handleChange = e => {
        setEvent({
            ...event,
            [e.target.name]:e.target.value
        })
    }

    let {title,description} = event
    const handleSubmit = () =>
    {

        //validacion de datos
        if(event.title === ''|| event.description ==='' || event.imgURL ==='' || event.ubication ==='' || event.cost ==='' ){
            alert('todos los campos son obligatorios')
            return
        }
        const requestInit={
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(event)
        }

        fetch("https://backend-ifgf.herokuapp.com/api/events")
            .then(res => res.json())
            .then(res =>console.log(res))

        setEvent({
            title:'',
            description:'',
            imgURL:'',
            ubication:'',
            schedule:'',
            cost:'',
            }
        )
    }

    return (

        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                    Titulo
                </label>
               <input  name="title" onChange={handleChange} type="text" id="title" className="form-control"/>

            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">
                    Descripción
                </label>
                <input name="description" onChange={handleChange}  type="text" id="name" className="form-control"/>

            </div>
            <div className="mb-3">
                <label htmlFor="imgURL" className="form-label">
                   ImagenURL
                </label>
                <input type="file" name="fimagen"   onChange={handleChange}accept="image/gif, image/jpeg, image/png"/>

            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                    Ubicación
                </label>
                <input name="ubication" onChange={handleChange}  type="text" id="name" className="form-control"/>

            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                    Horario
            </label>
                <input name="schedule" onChange={handleChange}  type="text" id="name" className="form-control"/>

            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                    Costo
                </label>
                <input name="cost" onChange={handleChange}  type="text" id="name" className="form-control"/>

            </div>



            <button type="submit" className="btn btn-primary">Enviar

            </button>
        </form>

    )

}
export default Eventformadmin