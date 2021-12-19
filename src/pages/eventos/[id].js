import Navbar from "../../components/Navbar";
import React from "react";
import Footer from "../../components/Footer";


export default function DevitPage (event,props) {
    console.log(props)
    return (
        <>
            <Navbar />
            <h1>{event.title}</h1>
            <h1>{event.description}</h1>

        </>
    )
}

export async function getServerSideProps (context) {
    const { params, res } = context
    const { id } = params

    const apiResponse = await fetch(`https://backend-ifgf.herokuapp.com/api/events/${id}`)

    if (apiResponse.ok) {
        const props = await apiResponse.json()
        return { props }
    }
    if (res) {
        res.writeHead(404).end()
    }

}
