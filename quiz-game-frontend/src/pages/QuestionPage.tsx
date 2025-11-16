import { Container } from "react-bootstrap";
import useGameSettings from "../hooks/useGameSettings";
import axios from "axios";
import { useState, useEffect} from "react";
import type { Question } from "../types/type";

const QuestionPage = () => {
  const { category, difficulty, numberOfQuestions } = useGameSettings();
  const [questions, setQuestions] = useState<Question[]>([]);

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
        setQuestions(fetchedQuestions);
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
          <div className="mx-3 border border-1 p-2 border-primary">
            Answer 1
          </div>
          <div className="mx-3 border border-1 p-2 border-primary">
            Answer 2
          </div>
        </div>
        <div className="d-flex justify-content-around">
          <div className="mx-3 border border-1 p-2 border-primary">
            Answer 3
          </div>
          <div className="mx-3 border border-1 p-2 border-primary">
            Answer 4
          </div>
        </div>
      </div>
    </Container>
  );
};

export default QuestionPage;
