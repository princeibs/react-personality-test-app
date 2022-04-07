import React from "react";
import "./Quiz.scss";

const Quiz = (props) => {
  const renderAnswerOptions = (option) => {
    return (
      <li>
        <div className="option-box">
          <input
            checked={option.type === option.answer}
            id={option.type}
            value={option.type}
            name={option.type}
            disabled={props.answer}
            onChange={props.onAnswerSelected}
            type="radio"
          />
        </div>
        <label className="" htmlFor={option.answerType}>
          {option.content}
        </label>
      </li>
    );
  };

  return (
    <div className="app__quiz">
      <div className="app__quiz-content">
        <div className="question-count">
          Question<span>{props.questionId}</span>of
          <span>{props.questionTotal}</span>
        </div>
        <div className="question-section">
          <h1>{props.question}</h1>
        </div>
        <div className="options-section">
          <ul>{props.answerOptions.map(renderAnswerOptions)}</ul>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
