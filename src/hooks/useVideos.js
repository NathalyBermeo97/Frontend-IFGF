import { useEffect } from "react";
import { useState } from "react";
import Videos from "../api/videos";

export const useVideos = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const getVideos = () => {
            Videos.get()
                .then(response => {
                    console.log({response})
                    setVideos(response.data)
                }).catch(err => console.log('something went wrong', err));
        };
        getVideos();
    }, []);

    const updateVideos = async (id, newVideosItem) => {
        try{
            const response = await Videos.update(id, newVideosItem)
            return response.data
        }catch(e){
            console.log('Something went wrong', e)
        }
    }

    const createVideosItem = async (newVideosItem) => {
        try{
            const response = await Videos.create(newVideosItem)
            return response.data
        }catch(e){
            console.log('something went wrong', e)
        }
    }
    const deleteVideos = async (newVideosItem) => {
        try{
            const response = await Videos.delete(newVideosItem)
            return response.data
        }catch(e){
            console.log('something went wrong', e)
        }
    }


    return {videos, setVideos,deleteVideos,updateVideos, createVideosItem};
};