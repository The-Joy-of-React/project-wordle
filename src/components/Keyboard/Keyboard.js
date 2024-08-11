import React from "react";
import { getStatus } from "../../game-helpers";

import Key from "../Key/Key";
import Container from "../Container/Container";

const KeyboardArray = [["QWERTYUIOP"], ["ASDFGHJKL"], ["ZXCVBNM"]];

function Keyboard({ inputList, answer }) {
  const results = getStatus(inputList, answer);
  return (
    <Container direction="column">
      {KeyboardArray.map((keyArray, r) => {
        return (
          <Container key={r} direction="row">
            {keyArray[0].split("").map((key) => {
              return (
                <Key
                  key={key}
                  status={results[key] ? results[key]["status"] : undefined}
                  value={key}
                />
              );
            })}
          </Container>
        );
      })}
    </Container>
  );
}

export default Keyboard;
