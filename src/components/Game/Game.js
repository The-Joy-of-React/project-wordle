import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import PlayerInput from "../PlayerInput";
import GuessGrid from "../GuessGrid";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";
import Keyboard from "../Keyboard/Keyboard";

function Game() {
  // Pick a random word on every pageload.
  const [answer, setAnswer] = React.useState(sample(WORDS));
  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });
  const [inputList, setInputList] = React.useState([]);
  // Running, Lost, Won
  const [gameStatus, setGameStatus] = React.useState("Running");

  function newGame() {
    setAnswer(sample(WORDS));
    setInputList([]);
    setGameStatus("Running");
  }

  function handleInputSubmit(input) {
    const nextInputList = [...inputList, input];
    setInputList(nextInputList);

    if (input.toUpperCase() === answer) {
      setGameStatus("Won");
    } else if (nextInputList.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("Lost");
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
      <Keyboard inputList={inputList} answer={answer} />
      {gameStatus === "Won" && (
        <WonBanner numOFGuesses={inputList.length} newGame={newGame} />
      )}
      {gameStatus === "Lost" && (
        <LostBanner answer={answer} newGame={newGame} />
      )}
    </>
  );
}

export default Game;
