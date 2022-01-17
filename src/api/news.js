import api from "./api";


const News = {
    get: () => {
        return api.get("/news");
    },
    create: (newNewsItem) => {
        return api.post('/news', newNewsItem)
    },
    update: (id, newObject) => {
        return api.put(`/news/${id}`, newObject)
    },
    delete: (id) => {
        return api.delete(`/news/${id}`)
    }
};

export default News;