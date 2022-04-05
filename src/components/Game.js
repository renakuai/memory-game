import Scores from './Scores.js';
import Body from './Body.js';
import React, { useEffect, useState, useRef } from "react";

const Game = () => {
  const [oneLoaded, setOneLoaded] = useState(false);
  const [twoLoaded, setTwoLoaded] = useState(false);
  const [threeLoaded, setThreeLoaded] = useState(false);
  const [oneURL, setOneURL] = useState('');
  const [twoURL, setTwoURL] = useState('');
  const [threeURL, setThreeURL] = useState('');
  const [imgArray, setArray] = useState([]);
  const [selected, setSelected] = useState([]);
  const [currScore, setCurrScore] = useState(0);
  const [scoreArray, setScoreArray] = useState([]);
  const [bestScore, setBestScore] = useState('--');
  const [lose, setLose] = useState(false);

  useEffect(() => {
    const imgId = Math.floor(Math.random() * 150);
    const fullURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + imgId + '.png';
    if (oneURL === '') {
      setOneURL(fullURL);
      setArray(imgArray.concat(fullURL));
    }
    else if (twoURL === '') {
      setTwoURL(fullURL);
      setArray(imgArray.concat(fullURL));
    }
    else if (threeURL === '') {
      setThreeURL(fullURL);
      setArray(imgArray.concat(fullURL));
    }
  });

  useEffect(() => {
    if (imgArray.length > 2) {
      const prev = imgArray.slice(0, -3);
      if (!prev.includes(selected)) {
        setCurrScore(currScore + 1);
      }
      else {
        setLose(true);
      }
    }
  }, [selected]);

  const restart = () => {
    setScoreArray(scoreArray.concat(currScore));
    setLose(false);
    setArray([]);
    setSelected('');
    setCurrScore(0);
    setOneLoaded(false);
    setTwoLoaded(false);
    setThreeLoaded(false);
  };

  const childProps = { 
    oneLoaded, 
    twoLoaded,
    threeLoaded, 
    oneURL,
    twoURL,
    threeURL,
    imgArray,
    setOneLoaded,
    setTwoLoaded,
    setThreeLoaded,
    setOneURL,
    setTwoURL,
    setThreeURL,
    selected,
    setSelected,
    lose,
    restart,
  }

  const scoreProps = {
    currScore,
    bestScore,
    setBestScore,
    scoreArray
  }

  return (
    <div className="Game">
      <Scores {...scoreProps}/>
      <Body {...childProps} />
    </div>
  );
}

export default Game;