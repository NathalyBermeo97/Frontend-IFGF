import api from "./api";

const Messages = {
    get: () => {
        return api.get("/messages");
    }
};

export default Messages;