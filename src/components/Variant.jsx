import React from 'react';

const Variant = (props) => {



  return (
    <div className="variant">
      <input id={props.index} type="radio" name={props.questionID} value={props.index} checked={props.answerIndex.toString() == props.index} onChange={ (e) => props.changeRadio(e) } />
      <label htmlFor={props.index} >{props.answer}</label>
    </div>
  )
}

export default Variant
