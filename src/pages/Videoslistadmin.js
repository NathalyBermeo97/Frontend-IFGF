import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Videoslistadmin = ({videos}) => {
    return (


        <div>
            <table className="table">
                <thead>
                <tr>
                    <th>Título</th>
                    <th>Descripción</th>
                </tr>
                </thead>
                <tbody>
                {videos.map(video =>(
                    <tr key={video.id}>
                        <th>{video.title}</th>
                        <th>{video.description}</th>
                    </tr>

                ))}
                </tbody>
            </table>
        </div>
    )

}
export default Videoslistadmin;
export async function getStaticProps(){
    const response = await fetch ("https://backend-ifgf.herokuapp.com/api/videos")
    const data= await response.json()
    console.log(data)

    return{
        props:{
            videos:data,
        },
    }
}