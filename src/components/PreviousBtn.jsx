import React from 'react';
import { NavLink } from 'react-router-dom';

const PreviousBtn = (props) => {
  if(+props.questionID !== 1 ) {


    return <NavLink to={`/questions/${+props.questionID-1}`} >
      <button className='previous-btn btn' onClick={ () => props.setQuestionID( (prev) => prev - 1 ) } >Previous</button>
    </NavLink>
  }
  else {

    return <button className='previous-btn btn' style={{"opacity": "0"}} >Previous</button>
  }
}

export default PreviousBtn
