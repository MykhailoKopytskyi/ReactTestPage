import './App.css';
import data from "./data";
import {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Start from './components/Start';
import Questions from './components/Questions';
import Results from './components/Results';

function App() {


  let arr = [];
  for( let i = 1; i <=  data.length; i++ ) {
    arr.push({"questionID": i,
    "answerIndex": 0  })
  }

  const numberOfQuestions = data.length;
  let [questionID, setQuestionID] = useState(JSON.parse(localStorage.getItem("questionID")) || 1 );
  let [userAnswers, setUserAnswers] = useState( arr );


  // console.log(arr)


  useEffect( () => {
    localStorage.setItem("questionID", JSON.stringify(questionID))
  }, [questionID] );





  return (



    
    <BrowserRouter>
    <div className="App">
      <Routes>

        <Route path="/" element={
            <Start 
            numberOfQuestions={numberOfQuestions}
            />
        } />
      
        <Route path={`/questions/:id`}  element={
            <Questions
              data={data}
              questionID={questionID}
              setQuestionID={setQuestionID}
              userAnswers={userAnswers}
              setUserAnswers={setUserAnswers}
            />
        } />

     <Route path='/results' element={
        <Results
        
        />
     } />
     </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App;