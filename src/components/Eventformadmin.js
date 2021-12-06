import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {string} from "prop-types";
import Axios from "axios";

const Eventformadmin = ({event,setEvent}) => {
    const [titleevent,setTitleevent]=useState("");
    const [descriptionevent,setDescriptionevent]=useState("");
    const [imgURL,setImgURL]=useState("");
    const [ubicationevent,setUbicationevent]=useState("");
    const [scheduleevent,setScheduleevent]=useState("");
    const [costevent,setCostevent]=useState("");

    const Event = () => {
        Axios.post ("https://backend-ifgf.herokuapp.com/api/events",{
            title:titleevent,
            description:descriptionevent,
            imgURL:imgURL,
            ubication:ubicationevent,
            schedule:scheduleevent,
            cost:costevent,
        }).then((response)=>{
            console.log(response);
        });
    };

    return (

        <form >
            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                    Titulo
                </label>
               <input  name="title"  type="text" id="title" className="form-control" onChange={(e)=>{ setTitleevent(e.target.value);}}/>

            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">
                    Descripción
                </label>
                <input name="description"   type="text" id="name" className="form-control" onChange={(e)=>{ setDescriptionevent(e.target.value);}}/>

            </div>
            <div className="mb-3">
                <label htmlFor="imgURL" className="form-label" >
                   ImagenURL
                </label>
                <input type="file" name="fimagen"   accept="image/gif, image/jpeg, image/png" onChange={(e)=>{ setImgURL(e.target.value);}}/>

            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                    Ubicación
                </label>
                <input name="ubication"  type="text" id="name" className="form-control" onChange={(e)=>{ setUbicationevent(e.target.value);}}/>

            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                    Horario
            </label>
                <input name="schedule"   type="text" id="name" className="form-control" onChange={(e)=>{ setScheduleevent(e.target.value);}}/>

            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                    Costo
                </label>
                <input name="cost"  type="text" id="name" className="form-control" onChange={(e)=>{ setCostevent(e.target.value);}}/>

            </div>



            <button type="submit" className="btn btn-primary" onClick={Event}>Enviar

            </button>
        </form>

    )

}
export default Eventformadmin;