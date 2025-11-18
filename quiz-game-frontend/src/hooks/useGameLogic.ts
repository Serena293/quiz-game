import useGameSettings from "./useGameSettings";
import type { Question, processedQuestion } from "../types/type";
import { useState, useEffect } from "react";
import axios from "axios";
const useGameLogic = () => {
  const { category, difficulty, numberOfQuestions } = useGameSettings();
  const [questions, setQuestions] = useState<processedQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<
    { questionIndex: number; selectedAnswer: string; isCorrect: boolean }[]
  >([]);
  const [gameStatus, setGameStatus] = useState<"playing" | "finished">(
    "playing"
  );

  //Fisher-Yates shuffle algorithm
  const shuffleArray = (answers: string[]) => {
    const shuffled = [...answers];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Function to decode HTML entities in the question and answers
  const decodeHtmlEntities = (text: string): string => {
    const parser = new DOMParser();
    const decodedString = parser.parseFromString(
      `<!doctype html><body>${text}`,
      "text/html"
    ).body.textContent;
    return decodedString || text;
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get("https://opentdb.com/api.php", {
          params: {
            amount: numberOfQuestions,
            category: category,
            difficulty: difficulty,
            type: "multiple",
          },
        });
        return response.data.results;
      } catch (error) {
        console.error("Error fetching questions:", error);
        throw error;
      }
    };

    const loadQuestions = async () => {
      try {
        const fetchedQuestions = await fetchQuestions();
        const processedQuestions = fetchedQuestions.map((q: Question) => ({
          ...q,
          question: decodeHtmlEntities(q.question),
          all_answers: shuffleArray([
            decodeHtmlEntities(q.correct_answer),
            ...q.incorrect_answers.map(decodeHtmlEntities),
          ]),
        }));
        setQuestions(processedQuestions);
      } catch (error) {
        console.error("Failed to load questions:", error);
      }
    };

    loadQuestions();
  }, [category, difficulty, numberOfQuestions]);

  const handleAnswer = (selectedAnswer: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correct_answer;

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setUserAnswers((prev) => [
      ...prev,
      {
        questionIndex: currentQuestionIndex,
        selectedAnswer,
        isCorrect,
      },
    ]);

    //Next question or finish game
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setGameStatus("finished");
    }
  };
  const resetGame = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setUserAnswers([]);
    setGameStatus("playing");
  };
  const currentQuestion = questions[currentQuestionIndex];
  const progress =
    questions.length > 0 ? (currentQuestionIndex / questions.length) * 100 : 0;

  return {
    questions,
    setQuestions,
    category,
    difficulty,
    numberOfQuestions,
    currentQuestion,
    currentQuestionIndex,
    score,
    userAnswers,
    gameStatus,
    handleAnswer,
    resetGame,
    progress,
  };
};

export default useGameLogic;
