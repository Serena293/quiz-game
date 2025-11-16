import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import Footer from "./components/Footer";
import GameStartingPage from "./pages/GameStartingPage";
import QuestionPage from "./pages/QuestionPage";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
      <MyNavbar />
      <Router>
        <Routes>
          <Route path="/" element={<GameStartingPage />} />
          <Route path="/QuestionPage" element={<QuestionPage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
