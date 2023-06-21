import React from 'react';
import { NavLink } from 'react-router-dom';

const Start = (props) => {


  






  return (
    <div className='start-page' >
      <h2>Would you like to take a test ?</h2>
      <h2>It consists of {props.numberOfQuestions} questions</h2>
      <h2>Given topics are: Math and Economics</h2>
      <br />
      <h2>If yes, then click on the button and crack on !</h2>
      <br />
      <br />
      <br />

      <NavLink to="/questions/1" >
        <button className='btn-start' >Start Test</button>
      </NavLink>

    </div>
  )
}

export default Start
