import { useEffect } from "react";
import { useState } from "react";
import AdminVideos from "../api/adminvideos";


export const useAdminVideos = () => {
    const [adminVideos, setAdminVideos] = useState([]);

    useEffect(() => {
        const postAdminVideos = () => {
            AdminVideos.create()
                .then(response => setAdminVideos(response.data));
        };
        postAdminVideos();
    }, []);
    return adminVideos;
};