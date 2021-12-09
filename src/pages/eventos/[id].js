import api from "/src/api/api";
import Link from "next/link";


import React from "react";



export default function EventPages ({event}){

    return (
        <>



            <div >
                <div >

                    <h3>{event.title}</h3>

                </div>
            </div>




        </>
    );
};

export async function getStaticProps({ params }) {
    let event = null;
    try {
        console.log("params.id", params.id);
        const response = await api.get(`/events/${params.id}`);
        console.log("response", response);
        event = response.data;
    } catch (e) {
        console.log("error", e);
    }

    return {
        props: {
            event,
        }, // will be passed to the page component as props
    };
}

export async function getStaticPaths() {
    const response = await api.get(`/events`);
    const events = response.data.data;

    // Get the paths we want to pre-render based on posts
    const paths = events.map((event) => ({
        params: { id: "" + event.id },
    }));

    // We'll pre-render only these paths at build time.
    // { fallback: blocking } will server-render pages
    // on-demand if the path doesn't exist.
    return { paths, fallback: "blocking" };
}

