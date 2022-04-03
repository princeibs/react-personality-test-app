import React from "react";

const Quiz = (props) => {
  const renderAnswerOptions = (option) => {
    return (
      <li>
        <input
          checked={option.type === option.answer}
          id={option.type}
          value={option.type}
          name={option.type}
          disabled={props.answer}
          onChange={props.onAnswerSelected}
          type="radio"
        />
        <label className="" htmlFor={option.answerType}>
          {option.content}
        </label>
      </li>
    );
  };

  return (
    <div className="">
      <div className="">
        Question <span>{props.questionId}</span> of{" "}
        <span>{props.questionTotal}</span>
      </div>
      <div className="">
        <h1>{props.question}</h1>
      </div>
      <div>
        <ul>{props.answerOptions.map(renderAnswerOptions)}</ul>
      </div>
    </div>
  );
};

export default Quiz;
