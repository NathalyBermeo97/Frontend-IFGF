import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const url = "https://backend-ifgf.herokuapp.com/";

const News = ({news}) => {
    return (
        <div>
            <table className="table">
                <thead>
                <tr>
                    <th>Título</th>
                    <th>Descripción</th>
                    <th>Imagen</th>


                </tr>

                </thead>
                <tbody>
                {news.map(item =>(
                    <tr key={item.id}>
                        <th>{item.title}</th>
                        <th>{item.description}</th>
                        <th><img src={url+item.imgURL}/></th>


                    </tr>

                ))}


                </tbody>
            </table>

        </div>

    )

}
export default News;
export async function getStaticProps(){
    const response = await fetch ("https://backend-ifgf.herokuapp.com/api/news")
    const data= await response.json()
    console.log(data)

    return{
        props:{
            news:data,
        },
    }
}