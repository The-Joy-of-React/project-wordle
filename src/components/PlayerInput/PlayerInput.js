import React from "react";

function PlayerInput({ handleInputSubmit, gameStatus }) {
  const [tentativeInput, setTentativeInput] = React.useState("");

  function submitHandler(e) {
    e.preventDefault();
    handleInputSubmit(tentativeInput);
    setTentativeInput("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={submitHandler}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        maxLength={5}
        minLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={tentativeInput}
        onChange={(e) => setTentativeInput(e.target.value.toUpperCase())}
        disabled={gameStatus !== "Running"}
      ></input>
      <p>{tentativeInput}</p>
    </form>
  );
}

export default PlayerInput;
