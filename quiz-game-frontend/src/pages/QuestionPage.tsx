import { Container } from "react-bootstrap";
import useGameSettings from "../hooks/useGameSettings";
import axios from "axios";
import { useState, useEffect } from "react";
import type { Question, processedQuestion } from "../types/type";

const QuestionPage = () => {
  const { category, difficulty, numberOfQuestions } = useGameSettings();
  const [questions, setQuestions] = useState<processedQuestion[]>([]);

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
    'text/html'
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
          all_answers: shuffleArray([decodeHtmlEntities(q.correct_answer), ...q.incorrect_answers.map(decodeHtmlEntities)]
          ),
        }));
        setQuestions(processedQuestions);
      } catch (error) {
        console.error("Failed to load questions:", error);
      }
    };

    loadQuestions();
  }, [category, difficulty, numberOfQuestions]);

  return (
    <Container className="vh-100">
      <div className="d-flex flex-column justify-content-center align-items-center h-100">
        <h2 className="text-center mb-5">{questions[0]?.question}</h2>

        <div className="d-flex justify-content-between mb-3">
          <button className="btn btn-light border-primary py-3 mx-3 w-50">
            {questions[0]?.all_answers[0]}
          </button>
          <button className="btn btn-light border-primary py-3 mx-3 w-50">
            {questions[0]?.all_answers[1]}
          </button>
        </div>
        <div className="d-flex justify-content-around">
          <button className="btn btn-light border-primary py-3 mx-3 w-50">
            {questions[0]?.all_answers[2]}
          </button>
          <button className="btn btn-light border-primary py-3 mx-3 w-50">
            {questions[0]?.all_answers[3]}
          </button>
        </div>
      </div>
    </Container>
  );
};

export default QuestionPage;
