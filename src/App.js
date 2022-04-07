import React, { useState } from "react";

import { Question, Intro } from "./container";
import "./index.css";

const App = () => {
  const [showQuestion, setShowQuestion] = useState(false);

  const onClickStart = () => {
    setTimeout(() => setShowQuestion(!showQuestion), 500);
  };

  const displayIntro = () => {
    return <Intro onClickStart={() => onClickStart()} />;
  };

  const displayQuestion = () => {
    return <Question renderIntro={() => displayIntro()}/>;
  };

  return <div>{showQuestion ? displayQuestion() : displayIntro()}</div>;
};

export default App;
