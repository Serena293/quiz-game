import { createContext } from "react";


const ScoreContext = createContext<number | null>(0);

export default ScoreContext;