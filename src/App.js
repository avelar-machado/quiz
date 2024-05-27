// App.js

import React, {useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Question from "./Components/Question";
import qBank from "./Components/QuestionBank";
import Score from "./Components/Score";
import "./App.css";

function App () {

  const [dataQuestion, setDataQuestion] =  useState (
    {questions: qBank, 
      currentQuestion: 0, 
      selectedOption: "", 
      score: 0, 
      quiz: false,
    });

  const handleOptionChange = (e) => {
    setDataQuestion({
      ...dataQuestion, 
      selectedOption: e.target.value});
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    checkAnswer();
    handleNextQuestion();
  }

  const checkAnswer = () => {
    const { selectedOption, questions, currentQuestion } = dataQuestion;
    if (selectedOption === questions[currentQuestion].answer) {
      setDataQuestion({
        ...dataQuestion, 
        score: dataQuestion.score++,
      });
    }
  }

  const handleNextQuestion = () => {
    const { questions, currentQuestion } = dataQuestion;
    if (currentQuestion + 1 < questions.length) {
        setDataQuestion({
          ...dataQuestion, 
          currentQuestion: dataQuestion.currentQuestion + 1,
          selectedOption: "",
        });
    } else {
        setDataQuestion({
          ...dataQuestion,
          quiz: true,
        });
    }
};

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1 className="app-title mb-3">QUIZ APP</h1>

      {!dataQuestion.quiz ? (
         <Question question = {dataQuestion.questions[dataQuestion.currentQuestion]} selectedOption = {dataQuestion.selectedOption} onSubmit = {handleOnSubmit} onOptionChange = {handleOptionChange} />
      ) : (
        <Score score = {dataQuestion.score}/>
      )}
        
    </div>
  );
}



export default App;
