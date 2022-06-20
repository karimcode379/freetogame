import "./App.css";
import { Route, Routes } from "react-router-dom";
import GameList from "./components/GameList";
import Home from "./pages/Home";
import All from "./pages/All";
import GameDetail from "./pages/GameDetail";
import Recently from "./pages/Recently";

function App() {
  return (
    <div className="App">
      <GameList />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<All />} />
        <Route path="/gamedetail/:id" element={<GameDetail />} />
        <Route path="/recently" element={<Recently />} />
      </Routes>
    </div>
  );
}

export default App;
