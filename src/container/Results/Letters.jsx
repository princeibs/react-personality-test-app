import React, { useState } from "react";

import { lettersData } from "../../api/data";

const Letters = (props) => {
  const [showLetterDetails, setShowLetterDetails] = useState(false);
  const [letterClicked, setLetterClicked] = useState();
  const lettersList = () => (
    <div>
      <h1 className="">Letters Result</h1>
      <h2 className="">{props.lettersResult}</h2>
      <p className="">What does this result mean?</p>
      <ul className="">
        {Object.keys(lettersData).map((letter) => (
          <li className="" onClick={() => handleItemClick(letter)}>
            {letter}
            <div className="">{"-->"}</div>
          </li>
        ))}
      </ul>
      <div onClick={props.onNextClick}>Next {">>"}</div>
    </div>
  );

  const handleItemClick = (letter) => {
    setLetterClicked(letter);
    setShowLetterDetails(true);
  };
  const letterDetails = () => (
    <div>
      <div onClick={() => setShowLetterDetails(false)}>X</div>
      <div>{lettersData[letterClicked]["title"]}</div>
      <div>{lettersData[letterClicked]["content"]}</div>
    </div>
  );
  return <div>{showLetterDetails ? letterDetails() : lettersList()}</div>;
};

export default Letters;
