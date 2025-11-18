import type { ReactNode } from "react";
import useLogicGame from "../hooks/useGameLogic";
import ScoreContext from "../context/ScoreContext";


interface GameLogicProviderProps {
  children: ReactNode;
}
const GameLogicProvider = ({children}: GameLogicProviderProps) => {

   const gameLogic = useLogicGame();

   <ScoreContext.Provider value={gameLogic}>
      {children}
   </ScoreContext.Provider>


}


export default GameLogicProvider;