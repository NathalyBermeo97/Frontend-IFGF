import api from "./api";

const Questionnaires = {
  get: () => {
    return api.get("/questionaries");
  },
  create: (newQuestionnaire) => {
    return api.post("/questionaries", newQuestionnaire);
  },
  update: (id, newObject) => {
    return api.put(`/questionaries/${id}`, newObject)
  },
  delete: (id) => {
    return api.delete(`/questionaries/${id}`)
  }
};

export default Questionnaires;
