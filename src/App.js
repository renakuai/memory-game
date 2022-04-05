import './App.css';
import Header from './components/Header.js';
import StartDirections from './components/StartDirections.js';
import Game from './components/Game.js';
import React, { useState } from "react";


function App() {
  const [gameStatus, setGameStatus] = useState(false);

  const changeGameStatus = () => {
    setGameStatus(true);
    console.log(gameStatus);
  }

  return (
    <div className="App">
      <Header />
      { !gameStatus ?
      <StartDirections changeGameStatus={changeGameStatus} /> :
      <Game />}
    </div>
  );
}

export default App;
