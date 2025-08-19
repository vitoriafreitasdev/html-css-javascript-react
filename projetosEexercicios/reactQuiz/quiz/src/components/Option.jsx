/* eslint-disable no-unused-vars */
import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import './Option.css'

const Option = ({option, selectOption, answer, hide}) => {
    const [quizState] = useContext(QuizContext)
    
  return (
    <div className={`option ${quizState.answerSelected && option === answer ? "correct" : ""} ${quizState.answerSelected && option !== answer ? "wrong" : ""}  ${hide ? "hide" : ""}` } onClick={() => selectOption()}>{option}</div>
  )
}

export default Option