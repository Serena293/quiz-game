export type GameSettingsContextType = {
  category: string;
  setCategory: (value: string) => void;

  difficulty: string;
  setDifficulty: (value: string) => void;

  numberOfQuestions: number;
  setNumberOfQuestions: (value: number) => void;
};
