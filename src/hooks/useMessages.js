import { useEffect } from "react";
import { useState } from "react";
import Messages from "../api/messages";


export const useMessages = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const getMessages = () => {
            Messages.get()
                .then(response => setMessages(response.data));
        };
        getMessages();
    }, []);
    return messages;
};