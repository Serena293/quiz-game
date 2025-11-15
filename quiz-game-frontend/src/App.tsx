import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import Footer from "./components/Footer";
import GameStartingPage from "./pages/GameStartingPage";

function App() {
  return (
    <>
      <MyNavbar />
 
        <GameStartingPage />
     
      <Footer />
    </>
  );
}

export default App;
