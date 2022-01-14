import api from "./api";

const Inscriptions = {
    get: () => {
        return api.get("/inscriptions").then(response => response.data);
    },
    getAll: () => {
        return api.get("/inscriptions/all").then(response => response.data);
    },
    create: (eventId) => {
        return api.put(`/inscriptions/${eventId}`)
    },
    update: (id, newObject) => {
        return api.put(`/events/${id}`, newObject)
    },
    delete: (id) => {
        return api.delete(`/events/${id}`)
    }
};

export default Inscriptions;