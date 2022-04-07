import React, { useState } from "react";
import Colors from "./Colors";
import Letters from "./Letters";
import Briggs from "./Briggs";

import "./Results.scss"

const Results = (props) => {
  const [showColorsResult, setShowColorsResult] = useState(true);
  const [showLettersResult, setShowLettersResult] = useState(false);
  const [showBriggsResult, setShowBriggsResult] = useState(false);

  const renderColorsResult = () => {
    return (
      <Colors colorsResult={props.colorsResult} onNextClick={onNextClick} />
    );
  };

  const renderLettersResult = () => {
    return (
      <Letters lettersResult={props.lettersResult} onNextClick={onNextClick} />
    );
  };

  const renderBriggsResult = () => {
    return <Briggs briggsResult={props.briggsResult} handleResetTest={props.handleResetTest} />;
  };

  const onNextClick = () => {
    if (showColorsResult) {
      setTimeout(() => {
        setShowColorsResult(!showColorsResult);
        setShowLettersResult(!showLettersResult);
      }, 200);
    } else if (showLettersResult) {
      setTimeout(() => {
        setShowLettersResult(!showLettersResult);
        setShowBriggsResult(!showBriggsResult);
      }, 200);
    }
  };

  return (
    <div className="app__result">
      {showColorsResult
        ? renderColorsResult()
        : showLettersResult
        ? renderLettersResult()
        : showBriggsResult
        ? renderBriggsResult()
        : ""}
    </div>
  );
};

export default Results;
