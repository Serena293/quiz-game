import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import Footer from "./components/Footer";
import GameStartingPage from "./pages/GameStartingPage";
import QuestionPage from "./pages/QuestionPage";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ScorePage from "./pages/ScorePage";
import GameLogicProvider from "./provider/GameLogicProvider";


function App() {
  return (
    <>
      <GameLogicProvider>
        <MyNavbar />
        <main className=""> 
          <Router>
            <Routes>
              <Route path="/" element={<GameStartingPage />} />
              <Route path="/QuestionPage" element={<QuestionPage />} />
              <Route path="/score" element={<ScorePage />} />
            </Routes>
          </Router>
        </main>
        <Footer />
      </GameLogicProvider>
    </>
 
  );
}

export default App;
