import { createContext } from "react";
import type { GameLogicContextType } from "../types/type";


const ScoreContext = createContext<GameLogicContextType | null>(null);

export default ScoreContext;