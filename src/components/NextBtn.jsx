import React from 'react';
import { NavLink } from 'react-router-dom';


const NextBtn = (props) => {
  if(props.questionID !== props.data.length ) {
    
  return <NavLink to={`/questions/${+props.questionID+1}`} >
            <button className='next-btn btn' onClick={ () => props.setQuestionID( (prev) => prev + 1 ) } >Next</button>
        </NavLink>
  }

  else {
    return false;
  }
}

export default NextBtn
