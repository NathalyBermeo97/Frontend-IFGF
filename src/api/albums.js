import api from "./api";

const Albums = {
    get: () => {
        return api.get("/albums");
    },
    create: (newAlbumsItem) => {
        return api.post('/albums', newAlbumsItem)
    },
    update: (id, newObject) => {
        return api.put(`/albums/${id}`, newObject)
    }
};

export default Albums;