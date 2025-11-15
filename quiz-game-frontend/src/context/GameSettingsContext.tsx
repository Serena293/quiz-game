import { createContext } from "react";
import type { GameSettingsContextType } from "../types/type";


const GameSettingsContext = createContext<GameSettingsContextType | null>(null);

export default GameSettingsContext;