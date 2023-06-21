import React from 'react';
import { NavLink } from 'react-router-dom';

const FinishBtn = (props) => {

  if( props.data.length == props.questionID ) {
    return <NavLink to={`/results`} >
              <button className='finish-btn btn'  >Finish Test</button>
          </NavLink>
  }

}

export default FinishBtn
