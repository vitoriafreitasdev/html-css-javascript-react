/* eslint-disable @typescript-eslint/no-unused-vars */

// components
import ReviewForm from "./components/ReviewForm"
import Thanks from "./components/Thanks"
import UserForm from "./components/UserForm"
import Steps from "./components/Steps"
import {GrFormNext, GrFormPrevious} from "react-icons/gr"
import { FiSend } from "react-icons/fi"
// hooks
import {useForm} from "./hooks/useForm"
// CSS
import "./App.css"
import { useState } from "react"

type FormFields = {
  name: string, 
  email: string,
  review: string,
  comment: string
}

const formTemplate: FormFields = {
  name: "", 
  email: "",
  review: "",
  comment: ""
}

function App() {
  const [data, setData] = useState(formTemplate)

  const uptadeFieldHandler = (key: string, value: string) => {
    setData((prev) => {return {...prev, [key]: value}})
  }

  const formComponents = [
    <UserForm data={data} uptadeFieldHandler={uptadeFieldHandler}/>,
    <ReviewForm data={data} uptadeFieldHandler={uptadeFieldHandler}/>,
    <Thanks data={data}/>
  ]
  const {currentStep, currentComponent, changeStep, isLastStep} = useForm(formComponents)

  return (
    <div className="app">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>
          Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto
        </p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep}/>
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
            <div className="inputs-container">
              {currentComponent}
            </div>
            <div className="actions">
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious/>
                <span>Voltar</span>
              </button>
              {!isLastStep ? (
                <button type="submit">
                  <span>Avançar</span>
                  <GrFormNext/>
                </button>
              ) : (
                <button type="button">
                  <span>Enviar</span>
                  <FiSend/>
                </button>
              )}
            </div>
        </form>
      </div>
    </div>
  )
}

export default App
