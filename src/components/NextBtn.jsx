import React from 'react';
import { NavLink } from 'react-router-dom';


const NextBtn = (props) => {
  if(props.currentQuestionID !== props.data.length ) {
    
    return <NavLink to={`/questions/${+props.currentQuestionID+1}`} >
 
 <button className='next-btn btn' onClick={ () => props.setCurrentQuestionID( (prev) => prev + 1 ) } >Next</button>



</NavLink>
  }
  else {
    return false;
  }
}

export default NextBtn
