import React from "react";
import Banner from "../Banner/Banner";
import RestartGame from "../RestartGame/RestartGame";

function LostBanner({ answer, newGame }) {
  return (
    <Banner status="sad">
      <div className="container">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
        <RestartGame newGame={newGame} />
      </div>
    </Banner>
  );
}

export default LostBanner;
