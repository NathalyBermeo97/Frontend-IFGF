import api from "./api";

const News = {
    get: () => {
        return api.get("/news");
    }
};

export default News;