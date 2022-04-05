import React, { useEffect, useState, useRef } from "react";

const Body = (childProps) => {
  const clearCards = (e) => {
    childProps.setOneLoaded(false);
    childProps.setTwoLoaded(false);
    childProps.setThreeLoaded(false);
    childProps.setSelected(e.target.src);
    childProps.setOneURL('');
    childProps.setTwoURL('');
    childProps.setThreeURL('');
  }
  return (
    <div className="Body">
      {!childProps.lose ?
        <div className="PokemonCards">
            <div className="Card">
              <img
                className="Card__One"
                src={childProps.oneURL}
                style={{ display: (childProps.oneLoaded && childProps.twoLoaded && childProps.threeLoaded) ? "block" : "none" }}
                alt='pokemon'
                onLoad={() => childProps.setOneLoaded(true)}
                onClick={clearCards} />
            </div>
            <div className = "Card" >
              <img
                className="Card__Two"
                style={{ display: (childProps.oneLoaded && childProps.twoLoaded && childProps.threeLoaded) ? "block" : "none" }}
                src={childProps.twoURL}
                alt='pokemon'
                onLoad={() => childProps.setTwoLoaded(true)}
                onClick={clearCards}/>
            </div>
            <div className = "Card">
              <img
                className="Card__Three"
                src = {childProps.threeURL}
                alt='pokemon'
                style={{ display: (childProps.oneLoaded && childProps.twoLoaded && childProps.threeLoaded) ? "block" : "none" }}
                onLoad={() => childProps.setThreeLoaded(true)}
                onClick={clearCards}/>
            </div>
        </div> :
        <div className="Lost">
          Sorry! You just lost :(! Would you like to try again?
          <div className="Options">
            <div className="Lost-Yes" onClick={childProps.restart}>
              Y </div>
            /
            <div className="Lost-No">
              N</div>
          </div>
        </div>}
    </div>
  );
}

export default Body;