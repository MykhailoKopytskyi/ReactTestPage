import React from 'react';

const Variant = (props) => {

  function chooseAnswer() {
    console.log( "Question ID: " + props.currentQuestionID,  ' Answer index: ' + props.answerIndex );

    props.setUserAnswers( (prev) => {
      console.log("render")
      let targetObjectIndex = prev.findIndex( (object) => object.currentQuestionID == props.currentQuestionID  )
      prev[targetObjectIndex].answerIndex = props.answerIndex;
      return prev
    } )

    console.log(props.userAnswers)
  }


  // let [radio, setRadio] = useState(true)

  // let checked = props.answerIndex == props.currentChosenAnswerIndex;
  // console.log( "User answerr is index :  " + props.currentChosenAnswerIndex, "Current answer Index:  " + props.answerIndex )
  // console.log( "Checked Boolean   ", checked )


  return (
    <div className="variant">
      <input type="radio" name={props.currentQuestionID} onChange={ () =>  chooseAnswer() } checked={props.answerIndex == props.currentChosenAnswerIndex}    />
      <label>{props.answer}</label>
    </div>
  )
}

export default Variant
