import React from 'react';

import NextBtn from './NextBtn';
import PreviousBtn from './PreviousBtn';
import FinishBtn from './FinishBtn';

const Buttons = (props) => {
  return (
    <div className="buttons" >
       <PreviousBtn
        data={props.data}
        questionID={props.questionID}
        setQuestionID={props.setQuestionID}

      />

      <NextBtn
        data={props.data}
        questionID={props.questionID}
        setQuestionID={props.setQuestionID}
      />
    </div>
  )
}

export default Buttons
