import React from "react";

const Intro = ({ onClickStart }) => {
  return (
    <div>
      <h1>Welcome to Mayer Briggs personality test</h1>
      <p>This test consists of 40 questions</p>
      <p>Please answer as accurate as possible</p>

      <div onClick={onClickStart}>Start</div>
    </div>
  );
};

export default Intro;
