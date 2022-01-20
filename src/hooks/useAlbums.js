import { useEffect } from "react";
import { useState } from "react";
import Albums from "../api/albums";
import News from "../api/news";

export const useAlbums = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        const getAlbums = () => {
            Albums.get()
                .then(response => setAlbums(response.data)).catch(err => console.log('something went wrong', err));
        };
        getAlbums();
    }, []);
    const updateAlbums = async (id, newAlbumsItem) => {
        try{
            const response = await Albums.update(id, newAlbumsItem)
            return response.data
        }catch(e){
            console.log('Something went wrong', e)
        }
    }

    const createAlbumsItem = async (newAlbumsItem) => {
        try{
            const response = await Albums.create(newAlbumsItem)
            return response.data
        }catch(e){
            console.log('something went wrong', e)
        }
    }
    const deleteAlbums = async (newAlbumsItem) => {
        try{
            const response = await Albums.delete(newAlbumsItem)
            return response.data
        }catch(e){
            console.log('something went wrong', e)
        }
    }

    return {albums, setAlbums, updateAlbums, createAlbumsItem,deleteAlbums};

};