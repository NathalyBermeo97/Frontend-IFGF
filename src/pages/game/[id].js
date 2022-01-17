import { useRouter } from "next/router";

const Game = () => {
  const router = useRouter();
  const {query: {id}} = router;

  return <div>Game with id: {id}</div>;
};

export default Game;
