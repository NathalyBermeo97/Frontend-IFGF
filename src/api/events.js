import api from "./api";

const Events = {
    get: () => {
        return api.get("/events");
    },
    create: (newEventsItem) => {
        return api.post('/events', newEventsItem)
    },
    update: (id, newObject) => {
        return api.put(`/events/${id}`, newObject)
    },
    delete: (id) => {
        return api.delete(`/events/${id}`)
    }
};

export default Events;