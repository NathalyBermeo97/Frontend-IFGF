import api from "./api";

const Albums = {
    get: () => {
        return api.get("/albums");
    }
};

export default Albums;