import { Container } from "react-bootstrap";

import useGameLogic from "../hooks/useGameLogic";

const QuestionPage = () => {
  const { questions } = useGameLogic();
  const { 
    currentQuestion, 
    handleAnswer, 
    gameStatus,
    score,
    progress 
  } = useGameLogic();

  
  if (gameStatus === 'finished') {
    return <div>Final Score: {score}</div>;
    
  }

  if (!currentQuestion) {
    return <div>Caricamento domande...</div>;
  }
  return (
    <Container className="vh-100">
      <div className="d-flex flex-column justify-content-center align-items-center h-100">
             <div className="mb-3">
          Score: {score} - Progress: {Math.round(progress)}%
        </div>
        <h2 className="text-center mb-5">{questions[0]?.question}</h2>

        <div className="d-flex justify-content-between mb-3">
          <button className="btn btn-light border-primary py-3 mx-3 w-50"
           onClick={() => handleAnswer(currentQuestion.all_answers[0])}>
            {currentQuestion.all_answers[0]}
          </button>
          <button className="btn btn-light border-primary py-3 mx-3 w-50"
           onClick={() => handleAnswer(currentQuestion.all_answers[1])}>
            {currentQuestion.all_answers[1]}
          </button>
        </div>
        <div className="d-flex justify-content-around">
          <button className="btn btn-light border-primary py-3 mx-3 w-50"
           onClick={() => handleAnswer(currentQuestion.all_answers[2])}>
            {currentQuestion.all_answers[2]}
          </button>
          <button className="btn btn-light border-primary py-3 mx-3 w-50"
           onClick={() => handleAnswer(currentQuestion.all_answers[3])}
          >
            {currentQuestion.all_answers[3]}
          </button>
        </div>
      </div>
    </Container>
  );
};

export default QuestionPage;
