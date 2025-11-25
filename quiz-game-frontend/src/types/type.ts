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

export type processedQuestion = Question & { 
  all_answers: string[];
}

export type GameLogicContextType = {
  questions: processedQuestion[];
  setQuestions: React.Dispatch<React.SetStateAction<processedQuestion[]>>;

  category: string | number;
  difficulty: string;
  numberOfQuestions: number;

  currentQuestion: processedQuestion | undefined;
  currentQuestionIndex: number;

  score: number;

  userAnswers: {
    questionIndex: number;
    selectedAnswer: string;
    isCorrect: boolean;
  }[];

  gameStatus: "playing" | "finished";

  handleAnswer: (selectedAnswer: string) => void;
  resetGame: () => void;

  progress: number;
};