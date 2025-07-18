import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Option from "./Option";

import './Question.css'

const Question = () => {
    const [ quizState,  dispatch ] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestion]
    
    const onSelectOption = (option) => {
      dispatch({
        type: "CHECK_ANSWER",
        payload:  {answer: currentQuestion.answer, option} // para passar dados ao reducer, vai chegar atraves do action
      })
  
    }

    return (
    <div id="question">
      <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
      <h2>{currentQuestion.question}</h2>
      <div id="options-container">
        {currentQuestion.options.map((option) => (
           <Option option={option} key={option} answer={currentQuestion.answer} selectOption={() => onSelectOption(option)} hide={quizState.optionToHide === option ? "hide" : null}/>
        ))}
      </div>
      {!quizState.answerSelected && !quizState.help  && (
        <>
          {currentQuestion.tip && (
            <button onClick={() => dispatch({type: "SHOW_TIP"})}>Dica</button>
          )}
          
        </>
      )}
      {!quizState.answerSelected && !quizState.help  &&  quizState.chancesOfDeletiong > 0 && (
        <>
          <button onClick={() => dispatch({type: "REMOVE_OPTION"})}>Excluir uma</button>
          <p>Você ainda pode excluir {quizState.chancesOfDeletiong} questões.</p>
        </>
      )}
      {}
      {!quizState.answerSelected && quizState.help === "tip" && <p>{currentQuestion.tip}</p>}
      {quizState.answerSelected && <button onClick={() => dispatch({type: "CHANGE_QUESTION"})}>Continuar</button>}
    </div>
  )
}

export default Question