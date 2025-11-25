import type { ReactNode } from "react";
import useGameLogic from "../hooks/useGameLogic";
// import GameSettingsContext from "../context/GameSettingsContext";
import ScoreContext from "../context/ScoreContext";

interface GameLogicProviderProps {
  children: ReactNode;
}
const GameLogicProvider = ({ children }: GameLogicProviderProps) => {
  const gameLogic = useGameLogic();
  return (
    <ScoreContext.Provider value={gameLogic}>{children}</ScoreContext.Provider>
  );
};

export default GameLogicProvider;
