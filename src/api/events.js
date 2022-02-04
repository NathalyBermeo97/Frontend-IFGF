import api from "./api";


const Events = {
    get: () => {
        return api.get("/events").then(response => response.data).catch(e => console.log('error', e));
    },
    create: (newEventsItem) => {
        return api.post('/events', newEventsItem)
    },
    createInscription: (eventId) => {
        return api.put(`/inscriptions/${eventId}`)
    },
    update: (id, newObject) => {
        return api.put(`/events/${id}`, newObject)
    },
    calloffInscription: (eventId) => {
        return api.delete(`/inscriptions/${eventId}`)
    },
    delete: (id) => {
        return api.delete(`/events/${id}`)
    }
};

export default Events;