import React from "react";
import Banner from "../Banner/Banner";
import RestartGame from "../RestartGame/RestartGame";

function WonBanner({ numOFGuesses, newGame }) {
  return (
    <Banner status="happy">
      <div className="container">
        <p>
          <strong>Congratulations! </strong> Got it in
          <strong>
            {numOFGuesses > 1 ? ` ${numOFGuesses} guesses` : " 1 guess"}
          </strong>
          .
        </p>
        <RestartGame newGame={newGame} />
      </div>
    </Banner>
  );
}

export default WonBanner;
