/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import Quiz from "../img/quiz.svg"
import "./Welcome.css";

const Welcome = () => {

  // no primeiro "quizState" eu pego os valores, e no segundo "dispatch" eu altero
  const [ quizState, dispatch ] = useContext(QuizContext);
  return (
    <div id="welcome">
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão abaixo para começar</p>
        <button onClick={() => dispatch({type: "CHANGE_STAGE"})}>Iniciar</button>
        <img src={Quiz} alt="Inicio do Quiz" />
    </div>
  )
}

export default Welcome