import { useEffect } from "react";
import { useState } from "react";
import Games from "../api/score";
import { useAuth } from "../context/AuthContext";

export const useGames = () => {
  const [games, setGames] = useState([]);
  const { currentUser, users } = useAuth();
  console.log({ games });
  useEffect(() => {
    const getGames = () => {
      Games.get()
        .then((response) => {
          console.log({ response });
          setGames(response.data);
        })
        .catch((err) => console.log("something went wrong", err));
    };
    getGames();
  }, []);

  const updateGames = async (id, newNewsItem) => {
    try {
      const response = await Games.update(id, newNewsItem);
      return response.data.message;
    } catch (e) {
      console.log("Something went wrong", e);
    }
  };

  const createGamesItem = async (newGamesItem) => {
    try {
      const response = await Games.create(newGamesItem);
      return response.data.message;
    } catch (e) {
      console.log("something went wrong", e);
    }
  };
  const deleteGames = async (newGamesItem) => {
    try {
      const response = await Games.delete(newGamesItem);
      return response.data.message;
    } catch (e) {
      console.log("something went wrong", e);
    }
  };

  const getUserQuestionnaireScore = async (questionnaireId, userId) => {
    try {
      const response = await Games.get();
      return response.data.filter(
        (game) =>
          game.user_id === userId && game.questionary_id === questionnaireId
      );
    } catch (e) {
      console.log("something went wrong", e);
    }
  };

  const hasAlreadyAttemptedGame = (questionnaireId) => {
    return games
      .filter((game) => game.user_id === currentUser._id)
      .some((game) => game.questionary_id === questionnaireId);
  };

  const getQuestionnairesGames = (questionnaireId) => {
    const newGames = games.map(game => ({...game}))
    const gamesWithUsers = newGames.map(game => {
      const user = users.find(user => user._id === game.user_id)
      if(user){
        delete game.user_id
        return {...game, user}
      }
      return game
    })
    let qg = {};
    gamesWithUsers.forEach((game) => {
      qg = qg[game.questionary_id]
        ? { ...qg, [game.questionary_id]: [...qg[game.questionary_id], game] }
        : { ...qg, [game.questionary_id]: [game] };
    });
    return qg[questionnaireId]
  };

  return {
    games,
    setGames,
    deleteGames,
    updateGames,
    createGamesItem,
    getUserQuestionnaireScore,
    hasAlreadyAttemptedGame,
    getQuestionnairesGames
  };
};
