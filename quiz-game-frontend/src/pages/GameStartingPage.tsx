import { Container } from "react-bootstrap";
import useGameSettings from "../hooks/useGameSettings";
import { useNavigate } from "react-router-dom";

const GameStartingPage = () => {
  const { setCategory, setDifficulty, setNumberOfQuestions } =
    useGameSettings();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    navigate("/QuestionPage");
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handleDifficultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDifficulty(e.target.value);
  };

  const handleQuestionsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfQuestions(Number(e.target.value));
  };

  return (
    <>
      
      <Container className="vh-100 d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-center mb-4 fw-bold">Game Stating Page</h1> 
       <form onSubmit={handleSubmit} className="p-4 border rounded-4 bg-white shadow-sm" style={{ width: "100%", maxWidth: "450px" }}>
          <div className="mb-3">
            <label htmlFor="categories-select" className="mb-2 px-1">Select Category:</label>
            <select
              name="categories"
              id="categories-select"
              className="w-100 border rounded-2 py-1 px-2 fs-6" 
              onChange={handleCategoryChange}
              
            >
              <option value="9">General Knowledge</option>
              <option value="10">Entertainment: Books</option>
              <option value="11">Entertainment: Film</option>
              <option value="12">Entertainment: Music</option>
              <option value="13">Entertainment: Musicals & Theatres</option>
              <option value="14">Entertainment: Television</option>
              <option value="15">Entertainment: Video Games</option>
              <option value="16">Entertainment: Board Games</option>
              <option value="17">Science & Nature</option>
              <option value="18">Science: Computers</option>
              <option value="19">Science: Mathematics</option>
              <option value="20">Mythology</option>
              <option value="21">Sports</option>
              <option value="22">Geography</option>
              <option value="23">History</option>
              <option value="24">Politics</option>
              <option value="25">Art</option>
              <option value="26">Celebrities</option>
              <option value="27">Animals</option>
              <option value="28">Vehicles</option>
              <option value="29">Entertainment: Comics</option>
              <option value="30">Science: Gadgets</option>
              <option value="31">Entertainment: Japanese Anime & Manga</option>
              <option value="32">Entertainment: Cartoon & Animations</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="difficulty-select"  className="mb-2 px-1">Select Difficulty:</label>
            <select
              name="difficulty"
              id="difficulty-select"
              className="w-100 border rounded-2 py-1 px-2 fs-6" 
              onChange={handleDifficultyChange}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="number-of-questions"  className="mb-2 px-1">Number of Questions:</label>
            <input
              type="number"
              id="number-of-questions"
              name="number-of-questions"
              min="1"
              max="50"
              defaultValue={10}
              className="w-100 border rounded-2 py-1 px-2 fs-6" 
              onChange={handleQuestionsChange}
            />

            {/* Consider to add type question, true/fale or multiple choise */}
          </div>
          <button type="submit" className="btn btn-primary w-100 py-2">
            Start Game
          </button>
        </form>
      </Container>
    </>
  );
};

export default GameStartingPage;
