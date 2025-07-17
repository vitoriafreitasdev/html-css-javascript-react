// Components

import {GrFormNext, GrFormPrevious} from 'react-icons/gr'
import {FiSend} from 'react-icons/fi'
import UseForm from "./components/UserForm"
import ReviewForm from './components/ReviewForm'
import Thanks from './components/Thanks'
import Steps from './components/Steps'

// Hooks

import { useForm } from './hooks/useForm'
import { useState } from 'react'

import './App.css'

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
}

function App() {
  const [data, setData] = useState(formTemplate)

  const updateFielHandler = (key, value) => {
    setData((prev) => {
      return {...prev, [key]: value}
    })
  }

  const formComponents = [
    <UseForm data={data} updateFielHandler={updateFielHandler}/>,
    <ReviewForm data={data} updateFielHandler={updateFielHandler}/>,
    <Thanks data={data}/>
  ]

  const {currentStep, currentComponent, changeStep, isLastStep, isFirstStep} = useForm(formComponents)
  return (
    <div className='app'>
      <div className='header'>
          <h2>Deixe sua avaliação</h2>
          <p>
            Ficamos felizes com a compra, utilize o furmulário abaixo para avaliar o produto
          </p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep}/>
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            {!isFirstStep && (
              <button type='button' onClick={() => changeStep(currentStep - 1)}>
                  <GrFormPrevious/>
                  <span>Voltar</span>
              </button>
            )}
            {!isLastStep ? (
              <button type='submit'>
                <span>Avançar</span>
                <GrFormNext/>
              </button>
            ) : (
              <button type='button'>
              < span>Enviar</span>
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
