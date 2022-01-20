import api from "./api";

const Game = {
  get: () => {
    return api.get("/scores");
  },
  create: (newGame) => {
    return api.post("/scores", newGame);
  },
  update: (id, newGame) => {
      return api.put(`/scores/${id}`, newGame)
  }
};

export default Game;
