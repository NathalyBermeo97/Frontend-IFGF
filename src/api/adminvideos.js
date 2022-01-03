import api from "./api";

const AdminVideos = {
    create: (data) => {
        return api.post("/videos", data);
    },
};

export default AdminVideos;