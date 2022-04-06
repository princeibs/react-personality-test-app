import React, { useState } from "react";

import { lettersData } from "../../api/data";
import { HiArrowSmRight } from "react-icons/hi";
import {MdOutlineCancel} from "react-icons/md"

const Letters = (props) => {
  const [showLetterDetails, setShowLetterDetails] = useState(false);
  const [letterClicked, setLetterClicked] = useState();
  const lettersList = () => (
    <div className="app__color-content">
      <h1 className="heading">Letter Result</h1>
      <h2 className="color">
        <span>{props.lettersResult}</span>
      </h2>
      <p className="p-text">What does the letters mean?</p>
      <ul className="colors-list">
        {Object.keys(lettersData).map((letter) => (
          <li className="" onClick={() => handleItemClick(letter)}>
            <HiArrowSmRight />
            {letter}
          </li>
        ))}
      </ul>
      <div className="btn" onClick={props.onNextClick}>
        <span>Next</span>
      </div>
    </div>
  );

  const handleItemClick = (letter) => {
    setLetterClicked(letter);
    setShowLetterDetails(true);
  };
  const letterDetails = () => (
    <div className="app__color-details">
      <div onClick={() => setShowLetterDetails(false)}>
        <MdOutlineCancel />
      </div>
      <div className="title">{lettersData[letterClicked]["title"]}</div>
      <div className="content">{lettersData[letterClicked]["content"]}</div>
    </div>
  );
  return (
    <div className="app__color">
      {showLetterDetails ? letterDetails() : lettersList()}
    </div>
  );
};

export default Letters;
