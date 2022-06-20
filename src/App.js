import './App.css';

import NavBar from './components/NavBar';

import { Route, Routes, Navigate } from "react-router-dom";
import All from "./pages/All";
import GameDetail from "./pages/GameDetail";
import Recently from "./pages/Recently";
import Home from "./pages/Home"


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/all" element={<All />} />
        <Route path="/gamedetail/:id" element={<GameDetail />} />
        <Route path="/recently" element={<Recently />} />
      </Routes>
    </div>
  );
}

export default App;
