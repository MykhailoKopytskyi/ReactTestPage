import React from 'react';

import NextBtn from './NextBtn';
import PreviousBtn from './PreviousBtn';
import FinishBtn from './FinishBtn';

const Buttons = (props) => {
  return (
    <div className="buttons" >
       <PreviousBtn
        data={props.data}
        currentQuestionID={props.currentQuestionID}
        setCurrentQuestionID={props.setCurrentQuestionID}

      />

      <NextBtn
        data={props.data}
        currentQuestionID={props.currentQuestionID}
        setCurrentQuestionID={props.setCurrentQuestionID}
      />
    </div>
  )
}

export default Buttons
