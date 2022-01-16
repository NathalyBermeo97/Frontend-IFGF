import api from "./api";

const Questionnaires = {
    get: () => {
        return api.get("/questionaries");
    },
};

export default Questionnaires;