import React from "react";

import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";
  return <span className={className}>{letter}</span>;
}

function GuessRow({ input, answer }) {
  const results = checkGuess(input, answer);

  return (
    <p className="guess">
      {range(5).map((i) => {
        return (
          <Cell
            key={i}
            letter={results ? results[i].letter : undefined}
            status={results ? results[i].status : undefined}
          />
        );
      })}
    </p>
  );
}

export default GuessRow;
