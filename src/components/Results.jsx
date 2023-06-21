import React from 'react'

const Results = (props) => {


  function calculateScore() {
    let totalScore = 0;
    for( let i = 0; i < props.data.length; i++  ) {
      if( props.data[i].correctAnswer() == props.userAnswers[i].answerIndex ) {
        totalScore++;
      }
    }
    return totalScore;
  }






  return (
    <div className='results' >  
      Results
      <div> Your score is {calculateScore()} </div>
    </div>
  )
}

export default Results
