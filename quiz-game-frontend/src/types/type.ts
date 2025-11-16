export type GameSettingsContextType = {
  category: string;
  setCategory: (value: string) => void;

  difficulty: string;
  setDifficulty: (value: string) => void;

  numberOfQuestions: number;
  setNumberOfQuestions: (value: number) => void;
};


export type Question = {
  type: string;
  difficulty: string;
  category: string;
  question: string; 
  correct_answer: string;
  incorrect_answers: string[];
}