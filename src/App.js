import './App.css';
import data from "./data";
import {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Start from './components/Start';
import Questions from './components/Questions';
import Results from './components/Results';

function App() {


  let arr = [];
  for( let i = 1; i <=  data.length; i++ ) {
    arr.push({"currentQuestionID": i,
    "answerIndex": 0
  })
  }

  const numberOfQuestions = data.length;
  let [currentQuestionID, setCurrentQuestionID] = useState(JSON.parse(localStorage.getItem("currentQuestionID")) || 1 );
  let [userAnswers, setUserAnswers] = useState( arr )






  useEffect( () => {

    localStorage.setItem("currentQuestionID", JSON.stringify(currentQuestionID))

  }, [currentQuestionID] )


 

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
              currentQuestionID={currentQuestionID}
              setCurrentQuestionID={setCurrentQuestionID}
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
}

export default App;
