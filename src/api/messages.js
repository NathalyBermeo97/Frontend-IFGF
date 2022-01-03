import api from "./api";

const Messages = {
    get: () => {
        return api.get("/messages");
    },
    create: (newMessagesItem) => {
        return api.post('/messages', newMessagesItem)
    },
    update: (id, newObject) => {
        return api.put(`/messages/${id}`, newObject)
    },
    delete: (id) => {
        return api.delete(`/messages/${id}`)
    }
};

export default Messages;