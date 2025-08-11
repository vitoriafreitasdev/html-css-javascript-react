/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

// 4 - importacao do componente
import FirstComponent from './components/FirstComponent';
// 5 - desestrurando props
import SecondComponent from './components/SecondComponent';
import Destructuring, {Category } from './components/Destructuring';
// 6 - useState
import State from './components/State';
import { createContext } from 'react';


// 8 - type
type textOrNull = string | null
type fixed = "Isso" | "Ou" | "Aquilo"

// 9 - context 
interface IAppContext {
  language: string,
  framework: string,
  projects: number
}
export const AppContext = createContext<IAppContext | null>(null)

function App() {
  // 1 - variaveis
  const name: string = "Mariah"
  const age: number = 30 
  const isWorking: boolean = false 

  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`
  }

  // 8 - type 
  const myText: textOrNull = "Tem algum texto aqui"
  let mySecondText: textOrNull = null

  // mySecondText = "Ola"

  const testandoFixed: fixed = "Isso"

  // 9 - context 
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5
  }

 

  return (
    <div className='App'>
      <h1>Typescript com react</h1>
      <h2>Nome: {name}</h2>
      <h2>Idade: {age}</h2>
      <h2>Esta trabalhando: {isWorking ? "Sim" : "Não"}</h2>
      <p>{isWorking && (<p>Está trabalhando!</p>)}</p>
      <p>{userGreeting(name)}</p>
      <FirstComponent/>
      <SecondComponent name="Segundo"/>
      <Destructuring title='Primeiro post' content='Alguma coisa' commentsQty={20} tags={["ts", "js", "react"]} category={Category.TS}/>
      <Destructuring title='Segundo post' content='Outra coisa' commentsQty={10} tags={["java", "GO", "php"] } category={Category.G}/>
      <State/>
      {myText && <p>Tem texto na variável</p>}
      {mySecondText && <p>Tem texto na variável</p>}
    </div>
  );
}

export default App;
