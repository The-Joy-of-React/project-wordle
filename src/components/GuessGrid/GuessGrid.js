import React from "react";

import GuessRow from "../GuessRow";

import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessGrid({ inputList, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((i) => (
        <GuessRow key={i} input={inputList[i]} answer={answer} />
      ))}
    </div>
  );
}

export default GuessGrid;
