import React, { useState } from "react";

import Quiz from "../Quiz/Quiz";
import Results from "../Results/Results";
import testQuestions from "../../api/testQuestions";

const Question = (props) => {
  // state variables
  const answersCountObj = {
    Colors: {
      Green: 10,
      Brown: 10,
      Blue: 10,
      Red: 10,
    },
    Letters: {
      A: 10,
      B: 10,
      C: 10,
      D: 10,
    },
    Briggs: {
      E: 5,
      I: 5,
      S: 5,
      N: 5,
      T: 5,
      F: 5,
      J: 5,
      P: 5,
    },
  };
  const [counter, setCounter] = useState(0);
  const [questionId, setQuestionId] = useState(1);
  const [question, setQuestion] = useState();
  const [answerOptions, setAnswerOptions] = useState();
  const [answer, setAnswer] = useState();
  const [answersCount, setAnswersCount] = useState(answersCountObj);
  const [briggsResult, setBriggsResult] = useState();
  const [colorsResult, setColorsResult] = useState();
  const [lettersResult, setLettersResult] = useState();

  //
  useState(() => {
    setQuestion(testQuestions[counter].question);
    setAnswerOptions(testQuestions.map((question) => question.answers)[0]);
  });

  const handleResetTest = () => {  
    // setCounter(0);
    // setQuestionId(1);
    // setQuestion();
    // setAnswerOptions();
    // setAnswer();
    // setAnswersCount(answersCountObj);
    // setBriggsResult();
    // setColorsResult();
    // setLettersResult();
  };

  // set answer entered by user
  const setUserAnswer = (answer) => {
    let applyAnswer = (answer) => {
      const answer_array = answer.split(",");
      let briggsAnswer = answer_array[0];
      let colorsAnswer = answer_array[1];
      let lettersAnswer = answer_array[2];
      if (answer_array.length === 3) {
        answersCount["Briggs"][briggsAnswer] += 1;
        answersCount["Colors"][colorsAnswer] += 1;
        answersCount["Letters"][lettersAnswer] += 1;
      } else if (answer_array.length === 4) {
        answersCount["Briggs"][briggsAnswer] -= 1;
        answersCount["Colors"][colorsAnswer] -= 1;
        answersCount["Letters"][lettersAnswer] -= 1;
      }
      return answersCount;
    };
    setAnswer(answer);
    setAnswersCount(applyAnswer(answer));
  };

  // increment counter and then set next question
  const setNextQuestion = () => {
    setCounter((counter) => counter + 1);
    setQuestionId((questionId) => questionId + 1);
    setQuestion(testQuestions[counter].question);
    setAnswerOptions(testQuestions[counter].answers);
    setAnswer();
  };

  // save user answer and load next question
  const handleAnswerSelected = (event) => {
    setUserAnswer(event.currentTarget.value);
    if (questionId < testQuestions.length) {
      setTimeout(() => setNextQuestion(), 500);
    } else {
      setTimeout(
        () =>
          setResults(
            getColorsResults(),
            getLettersResults(),
            getBriggsResults()
          ),
        500
      );
    }
  };

  // ===========================================================================
  //                        get test results
  // ===========================================================================
  const getBriggsResults = () => {
    const briggsAnswer = answersCount["Briggs"];
    const answersCountKeysBriggs = Object.keys(briggsAnswer);
    const answersCountValuesBriggs = answersCountKeysBriggs.map(
      (key) => briggsAnswer[key]
    );
    let briggsType = "";
    if (briggsAnswer.E >= briggsAnswer.I) {
      briggsType += "E";
    } else briggsType += "I";
    if (briggsAnswer.S >= briggsAnswer.N) {
      briggsType += "S";
    } else briggsType += "N";
    if (briggsAnswer.T >= briggsAnswer.F) {
      briggsType += "T";
    } else briggsType += "F";
    if (briggsAnswer.J >= briggsAnswer.P) {
      briggsType += "J";
    } else briggsType += "P";
    return briggsType;
  };

  const getColorsResults = () => {
    const colorsAnswer = answersCount["Colors"];
    const answersCountKeysColors = Object.keys(colorsAnswer);
    const answersCountValuesColors = answersCountKeysColors.map(
      (key) => colorsAnswer[key]
    );
    const maxAnswerCountColors = Math.max.apply(null, answersCountValuesColors);
    return answersCountKeysColors.filter(
      (key) => colorsAnswer[key] === maxAnswerCountColors
    );
  };

  const getLettersResults = () => {
    const lettersAnswer = answersCount["Letters"];
    const answersCountKeysLetters = Object.keys(lettersAnswer);
    const answersCountValuesLetters = answersCountKeysLetters.map(
      (key) => lettersAnswer[key]
    );
    const maxAnswerCountLetters = Math.max.apply(
      null,
      answersCountValuesLetters
    );
    return answersCountKeysLetters.filter(
      (key) => lettersAnswer[key] === maxAnswerCountLetters
    );
  };

  // ===========================================================================
  //                        set test results
  // ===========================================================================
  const setResults = (colorsResult, lettersResult, briggsResult) => {
    if (colorsResult.length >= 1) {
      setColorsResult(colorsResult[0]);
    }
    if (lettersResult.length >= 1) {
      setLettersResult(lettersResult[0]);
    }
    if (briggsResult.length >= 1) {
      setBriggsResult(briggsResult);
    }
  };

  // ===========================================================================
  //                    render quiz
  // ===========================================================================
  const renderQuiz = () => {
    return (
      <Quiz
        answer={answer}
        answerOptions={answerOptions}
        questionId={questionId}
        question={question}
        questionTotal={testQuestions.length}
        onAnswerSelected={handleAnswerSelected}
      />
    );
  };

  // ===========================================================================
  //                    render test result
  // ===========================================================================
  const renderResult = () => {
    return (
      <Results
        colorsResult={colorsResult}
        lettersResult={lettersResult}
        briggsResult={briggsResult}
        handleResetTest={handleResetTest}
      />
    );
  };

  return <div>{briggsResult ? renderResult() : renderQuiz()}</div>;
};

export default Question;
