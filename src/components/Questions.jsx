import React from 'react';

import Question from './Question';
import Buttons from './Buttons';



const Questions = (props) => {



  return (
    <div className='questions' >
      

      <Question
        data={props.data}
        currentQuestionID={props.currentQuestionID}
        userAnswers={props.userAnswers}
        setUserAnswers={props.setUserAnswers}
      />

      <Buttons
        data={props.data}
        currentQuestionID={props.currentQuestionID}
        setCurrentQuestionID={props.setCurrentQuestionID}
      />
     



    </div>
  )
}

export default Questions
