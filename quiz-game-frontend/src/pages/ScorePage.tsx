import { useContext } from "react";
import GameLogicContext from "../context/ScoreContext"; 
import { Container, Table } from "react-bootstrap";

const ScorePage = () => {
  const game = useContext(GameLogicContext);

  if (!game) return <h1>Error: game context not found</h1>;

  const { score, questions, userAnswers } = game;

  return (
    <Container className="my-5">
      <h1 className="mb-4">Your Score: {score} / {questions.length}</h1>

      <Table bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Question</th>
            <th>Your Answer</th>
            <th>Correct Answer</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {userAnswers.map((answer, idx) => {
            const question = questions[answer.questionIndex];
            return (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{question.question}</td>
                <td>{answer.selectedAnswer}</td>
                <td>{question.correct_answer}</td>
                <td>{answer.isCorrect ? "✅" : "❌"}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default ScorePage;
