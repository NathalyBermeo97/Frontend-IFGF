import { useEffect } from "react";
import { useState } from "react";
import Games from "../api/score";
import { useAuth } from "../context/AuthContext";

export const useGames = () => {
  const [games, setGames] = useState([]);
  const {currentUser} = useAuth()
  console.log({games})
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
    // try {
    //   const response = await Games.get();
      return games.filter(
        (game) =>
          game.user_id === currentUser._id
      ).some(game => game.questionary_id === questionnaireId)
    // } catch (e) {
    //   console.log("something went wrong", e);
    // }
  };

  return {
    games,
    setGames,
    deleteGames,
    updateGames,
    createGamesItem,
    getUserQuestionnaireScore,
    hasAlreadyAttemptedGame
  };
};
