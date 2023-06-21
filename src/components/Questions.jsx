import React from 'react';

import Question from './Question';
import Buttons from './Buttons';



const Questions = (props) => {


  return (
    <div className='questions' >
      

      <Question
        data={props.data}
        questionID={props.questionID}
        userAnswers={props.userAnswers}
        setUserAnswers={props.setUserAnswers}
      />

      <Buttons
        data={props.data}
        questionID={props.questionID}
        setQuestionID={props.setQuestionID}
      />
     



    </div>
  )
}

export default Questions
