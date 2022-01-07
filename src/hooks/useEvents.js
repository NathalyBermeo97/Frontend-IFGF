import { useEffect } from "react";
import { useState } from "react";
import Events from "../api/events";

export const useEvents = () => {
    const [events, setEvents] = useState([]);

    console.log('events', events)
    useEffect(() => {
        const getEvents= () => {
            Events.get()
                .then(data => {
                    setEvents(data)
                }).catch(err => console.log('something went wrong', err));
        };
        getEvents();
    }, []);

    const updateEvents = async (id, newEventsItem) => {
        try{
            const response = await Events.update(id, newEventsItem)
            return response.data.message
        }catch(e){
            console.log('Something went wrong', e)
        }
    }

    const createEventsItem = async (newEventsItem) => {
        try{
            const response = await Events.create(newEventsItem)
            return response.data.message
        }catch(e){
            console.log('something went wrong', e)
        }
    }
    const deleteEvents = async (newEventsItem) => {
        try{
            const response = await Events.delete(newEventsItem)
            return response.data.message
        }catch(e){
            console.log('something went wrong', e)
        }
    }


    return {events, setEvents,deleteEvents,updateEvents, createEventsItem};
};