import React from "react";
import Banner from "../Banner/Banner";

function WonBanner({ numOFGuesses }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>
          {numOFGuesses > 1 ? ` ${numOFGuesses} guesses` : " 1 guess"}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default WonBanner;
