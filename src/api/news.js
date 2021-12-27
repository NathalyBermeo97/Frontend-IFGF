import api from "./api";

const News = {
    get: () => {
        return api.get("/news");
    },
    create: () => {
        return api.post('/news')
    },
    update: (id, newObject) => {
        return api.put(`/news/${id}`, newObject)
    }
};

export default News;