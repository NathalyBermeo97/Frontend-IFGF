import { useEffect } from "react";
import { useState } from "react";
import Messages from "../api/messages";
import News from "../api/news";



export const useMessages = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const getMessages = () => {
            Messages.get()
                .then(response => setMessages(response.data)).catch(err => console.log('something went wrong', err));
        };
        getMessages();
    }, []);

    const updateMessages = async (id, newMessagesItem) => {
        try{
            const response = await Messages.update(id, newMessagesItem)
            return response.data
        }catch(e){
            console.log('Something went wrong', e)
        }
    }

    const createMessagesItem = async (newMessagesItem) => {
        try{
            const response = await Messages.create(newMessagesItem)
            return response.data
        }catch(e){
            console.log('something went wrong', e)
        }
    }
    const deleteMessages = async (newMessagesItem) => {
        try{
            const response = await Messages.delete(newMessagesItem)
            return response.data
        }catch(e){
            console.log('something went wrong', e)
        }
    }
    return {messages, setMessages, updateMessages, createMessagesItem,deleteMessages};
};