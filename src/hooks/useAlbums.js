import { useEffect } from "react";
import { useState } from "react";
import Albums from "../api/albums";


export const useAlbums = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        const getAlbums = () => {
            Albums.get()
                .then(response => setAlbums(response.data));
        };
        getAlbums();
    }, []);
    return albums;
};