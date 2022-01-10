import api from "./api";

const Games = {
    get: () => {
        return api.get("/questionaries").then(response => response.data);
    },
    create: (newEventsItem) => {
        return api.post('/questionaries', newEventsItem)
    },
    update: (id, newObject) => {
        return api.put(`/questionaries/${id}`, newObject)
    },
    delete: (id) => {
        return api.delete(`/questionaries/${id}`)
    }
};

export default Games;