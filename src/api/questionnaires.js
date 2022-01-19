import api from "./api";

const Questionnaires = {
    get: () => {
        return api.get("/questionaries");
    },
    create: (newQuestionnaire) => {
        return api.post('/questionaries', newQuestionnaire)
    }
};

export default Questionnaires;