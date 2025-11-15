import GameSettingsContext from "../context/GameSettingsContext";
import type { ReactNode } from "react";
import useGameSettings from "../hooks/useGameSettings";


interface GameSettingsProviderProps {
  children: ReactNode;
}

const GameSettingsProvider = ({children}: GameSettingsProviderProps) => {

    const gameSettings = useGameSettings();


    return (
        <GameSettingsContext.Provider value={gameSettings}>
            {children}
        </GameSettingsContext.Provider>
    )
}


export default GameSettingsProvider