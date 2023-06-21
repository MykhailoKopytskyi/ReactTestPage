import React, { useEffect } from 'react';
// import Variant from './Variant';
import { v4 } from 'uuid';
import { useState } from 'react';
import Variant from './Variant';

const Question = (props) => {

  const questionObject = props.data.find( (object) => +object.questionID === +props.questionID ? object  : false); // Particular element of an Array, i.e. object wit id, questio, answers and correct answer
  const answersArray = questionObject.answers;  // Array of answers of a given question(Object !!!)
  const userAnswerObject = props.userAnswers.find( (object) => object.questionID == props.questionID ? object : false );
  const answerIndex = userAnswerObject.answerIndex;


  console.log("User answer Object     " ,  userAnswerObject)
  console.log("Answer index   " , answerIndex)



  function changeRadio(e) {

    const radioValue = +e.target.value;
    props.setUserAnswers( (prev) => {

      let objectIndex;
      for( let i = 0; i < prev.length; i++ ) {
        if( prev[i].questionID == props.questionID ) {
          objectIndex = i;
        }
      }
      prev[objectIndex].answerIndex = radioValue;
      console.log( "Object index:   " + objectIndex );
      console.log(prev)
      return [...prev]
    } )
  }


  return (
    <div className='question'  >
      <h2>This is question number {questionObject.questionID}</h2>  
      <br />
      <div className='current-question' >{questionObject.question}</div>    
      <div className="variants-block">
     


        {/* <input type="radio" name='q' value="0" checked={ answerIndex.toString() == "0"} onChange={(e) => changeRadio(e) } />
        <input type="radio" name='q' value="1" checked={ answerIndex.toString() == "1"} onChange={(e) => changeRadio(e) } />
        <input type="radio" name='q' value="2" checked={ answerIndex.toString() == "2"} onChange={(e) => changeRadio(e) } />
        <input type="radio" name='q' value="3" checked={ answerIndex.toString() == "3"} onChange={(e) => changeRadio(e) } /> */}

        {answersArray.map( (arr, index) => <Variant
          changeRadio={changeRadio}
          index={index}
          questionID={props.questionID}
          answerIndex={answerIndex}
          answer={arr}

          key={v4()}
        /> )}


      </div>
    </div>
  )
}

export default Question
