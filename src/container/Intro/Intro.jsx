import React from "react";
import "./Intro.scss";


const Intro = ({ onClickStart }) => {
  return (
    <div className="app__intro">
      <div className="app__intro-content">        
        <h1 className="head-text">Welcome to Mayer Briggs Personality Test</h1>
        <p className="p-text">This test consists of 40 questions</p>
        <p className="p-text">Please answer as accurate as possible</p>
        <div className="app__intro-btn" onClick={onClickStart}>
          Start
        </div>
      </div>
    </div>
  );
};

export default Intro;
