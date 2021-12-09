import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {string} from "prop-types";
import Axios from "axios";

const Videosformadmin = ({video,setVideos}) => {
    const [titlevideo,setTitlevideo]=useState("");
    const [descriptionvideo,setDescriptionvideo]=useState("");
    const [typevideo,setTypevideo]=useState("");
    const [urlvideo,setUrlvideo]=useState("");

    const Video = () => {
        Axios.post ("https://backend-ifgf.herokuapp.com/api/videos",{
            title:titlevideo,
            description:descriptionvideo,
            type: typevideo,
            url:urlvideo

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
                <input  name="title"  type="text" id="title" className="form-control" onChange={(e)=>{ setTitlevideo(e.target.value);}}/>

            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">
                    Descripción
                </label>
                <input name="description"   type="text" id="name" className="form-control" onChange={(e)=>{ setDescriptionvideo(e.target.value);}}/>

            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                    Tipo
                </label>
                <input name="type"  type="text" id="name" className="form-control" onChange={(e)=>{ setTypevideo(e.target.value);}}/>

            </div>
            <div className="mb-3">
                <label htmlFor="imgURL" className="form-label" >
                    URL YouTube
                </label>
                <input type="url" name="url" id="url"
                       placeholder="Enter URL YouTube"
                       pattern="https://.*" size="63"
                       required onChange={(e)=>{ setUrlvideo(e.target.value);}}/>

            </div>




            <button type="submit" className="btn btn-primary" onClick={Video}>Enviar

            </button>
        </form>

    )

}
export default Videosformadmin;