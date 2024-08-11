import React from "react";

function RestartGame({ newGame }) {
  return (
    <button className="restartButton" onClick={newGame}>
      <img
        className="restartImage"
        src={require("../../images/RestartIcon.png")}
        alt="Restart Button"
      />
    </button>
  );
}

export default RestartGame;
