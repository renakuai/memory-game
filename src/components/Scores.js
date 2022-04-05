import React, { useState, useEffect } from "react";

const Scores = (scoreProps) => {
  const { currScore, bestScore, setBestScore, scoreArray } = scoreProps;

  useEffect(() => {
    if (scoreArray.length === 0) {
      setBestScore('--');
    }
    else {
      const max = Math.max(...scoreArray);
      setBestScore(max);
    }
  }, [scoreArray]);
  
  return (
    <div className="Scores">
      <div className="Current">
        <div className="Title">Current</div>
        <div className="ScoreGroup">
          <div className="Label">Score</div>
          <div className="Score">{currScore}</div>
        </div>
      </div>
      <div className="Best">
        <div className="Title">Best</div>
        <div className="ScoreGroup">
          <div className="Label">Score</div>
          <div className="Score">{bestScore}</div>
        </div>
      </div>
    </div>
  );
}

export default Scores;