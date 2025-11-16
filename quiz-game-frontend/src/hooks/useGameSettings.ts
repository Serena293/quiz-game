import type { GameSettingsContextType } from "../types/type";
import { useState, useEffect } from "react";

const useGameSettings = (): GameSettingsContextType => {
    
    const getInitialSettings = () => {
        if (typeof window === "undefined") {
            return {
                category: "general",
                difficulty: "medium", 
                numberOfQuestions: 10
            };
        }
        
        const stored = localStorage.getItem("game-settings");
        if (stored) {
            return JSON.parse(stored);
        }
        
        return {
            category: "general",
            difficulty: "medium",
            numberOfQuestions: 10
        };
    };

    const [category, setCategory] = useState<string>(getInitialSettings().category);
    const [difficulty, setDifficulty] = useState<string>(getInitialSettings().difficulty);
    const [numberOfQuestions, setNumberOfQuestions] = useState<number>(getInitialSettings().numberOfQuestions);


   
    useEffect(() => {
      const settings = {
            category,
            difficulty, 
            numberOfQuestions
        };
        localStorage.setItem("game-settings", JSON.stringify(settings));
      
    }, [category, difficulty, numberOfQuestions]);

    return {
        category,
        difficulty,
        numberOfQuestions,
        setCategory,
        setDifficulty,
        setNumberOfQuestions,
       

       
    };
};

export default useGameSettings;