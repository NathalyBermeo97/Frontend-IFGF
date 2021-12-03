import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Videosformadmin = ({videos,setVideos}) => {
    const handleChange = e => {
        setVideos({
            ...videos,
            [e.target.name]:e.target.value
        })
    }

    let {title,description,imgURL} = videos
    const handleSubmit = () =>
    {
        //validacion de datos
        if(videos.title === ''|| videos.description ==='' || videos.imgURL ==='' ){
            alert('todos los campos son obligatorios')
            return
        }
        const requestInit={
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(videos)
        }

        fetch("https://backend-ifgf.herokuapp.com/api/videos")
            .then(res => res.json())
            .then(res =>console.log(res))

        setInformacion({
                title:'',
                description:'',
                imgURL:'',

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




            <button type="submit" className="btn btn-primary">Enviar

            </button>
        </form>
    )

}
export default Videosformadmin;