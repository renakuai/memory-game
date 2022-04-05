import React, { useState } from "react";

const StartDirections = (props) => {
  return (
    <div className="StartDirections">
      <p>Each round will consist of 3 cards. The objective is to click the card that you HAVE NOT seen before.</p>
      <p>You will win a point if you pick correctly, but if you pick incorrectly, you will lose the game.</p>
      <p>Try to beat your best score.</p>
      <div className="StartDirections__Selection">
        <div className ="Directions">Got it? Let’s play!</div> <div className = "Yes" onClick = {props.changeGameStatus}>Y</div>
      </div>
    </div>
  );
}

export default StartDirections;