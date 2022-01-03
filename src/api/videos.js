import api from "./api";

const Videos = {
    get: () => {
        return api.get("/videos");
    },
    create: (newMessagesItem) => {
        return api.post('/videos', newMessagesItem)
    },
    update: (id, newObject) => {
        return api.put(`/videos/${id}`, newObject)
    },
    delete: (id) => {
        return api.delete(`/videos/${id}`)
    }
};

export default Videos;