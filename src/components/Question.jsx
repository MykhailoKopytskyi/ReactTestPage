import React from 'react';
import Variant from './Variant';
import { v4 } from 'uuid';


const Question = (props) => {

  const currentQuestion = props.data.find( (object) => +object.questionID === +props.currentQuestionID ? object  : false); // Particular element of an Array
  const currentAnswers = currentQuestion.answers;  // Array of answers of a given question
  let currentChosenAnswerIndex;
  for( let i = 0; i < props.userAnswers.length; i++ ) {
    if(+props.userAnswers[i].currentQuestionID == +props.currentQuestionID ) {
      currentChosenAnswerIndex = +props.userAnswers[i].answerIndex;
    }
  }

  return (
    <div className='question'  >
      <h2>This is question number {currentQuestion.questionID}</h2>  
      <br />
      <div className='current-question' >{currentQuestion.question}</div>    
      <div className="variants-block">
      {currentAnswers.map( (answer, index) => <Variant  
                    currentQuestionID={props.currentQuestionID}
                    answerIndex = {index}
                    answer={answer} 
                    userAnswers={props.userAnswers}
                    setUserAnswers={props.setUserAnswers}
                    key={v4()}
                    currentChosenAnswerIndex={currentChosenAnswerIndex}
       /> )}
      </div>
    </div>
  )
}

export default Question
