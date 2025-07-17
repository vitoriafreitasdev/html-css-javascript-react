// react, componentes, estáticos
import { useContext } from "react";
import { QuizContext } from "./context/quiz";

import Welcome from './components/Welcome'
import Question from './components/Question'
import GameOver from "./components/GameOver";
import PickCategory from "./components/PickCategory";

import './App.css'



function App() {
  const [ quizState ] = useContext(QuizContext);

  

  return (
    <div className='App'>
        <h1>Quiz de Programação</h1>
        {quizState.gameStage === "Start" && <Welcome/>}
        {quizState.gameStage === "Playing" && <Question/>}
        {quizState.gameStage === "Category" && <PickCategory/>}
        {quizState.gameStage === "End" && <GameOver/>}
    </div>
  )
}

export default App
