import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlayerList from "./components/PlayerList";
import PlayerDetails from "./components/PlayerDetails";
import CreatePlayerForm from "./components/CreatePlayerForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PlayerList />} />
        <Route path="/player/:id" element={<PlayerDetails />} />
        <Route path="/create" element={<CreatePlayerForm />} />
      </Routes>
    </Router>
  );
}

export default App;
