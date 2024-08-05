import React from "react";

import { range, sample } from "../../utils";
import { WORDS } from "../../data";

import PlayerInput from "../PlayerInput";
import GuessGrid from "../GuessGrid";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [inputList, setInputList] = React.useState([]);
  // Running, Lost, Won
  const [gameStatus, setGameStatus] = React.useState("Running");

  function handleInputSubmit(input) {
    const nextInputList = [...inputList, input];
    setInputList(nextInputList);

    if (nextInputList.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("Lost");
    } else if (input.toUpperCase() === answer) {
      setGameStatus("Won");
    }
  }

  return (
    <>
      <GuessGrid
        inputList={inputList}
        answer={answer}
        setGameStatus={setGameStatus}
      />
      <PlayerInput
        handleInputSubmit={handleInputSubmit}
        gameStatus={gameStatus}
      />
      {gameStatus === "Won" && <WonBanner numOFGuesses={inputList.length} />}
      {gameStatus === "Lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
