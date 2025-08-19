import { createContext, useReducer} from "react";
import questions from '../data/questions_complete'

const STAGES = ["Start", "Category", "Playing", "End"]

const initialState = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0,
    score: 0,
    answerSelected: false,
    help: false,
    optionToHide: null,
    chancesOfDeletiong: 1,
   
}

const quizReducer = (state, action) => {
    
    switch (action.type) {
        case "CHANGE_STAGE":

        // pega o estado anteriores e dps altera as que precisa
            return {
                ...state,
                gameStage: STAGES[1]
            }


        case "START_GAME":
            { let quizQuestions = null

            state.questions.forEach((question) => {
                if(question.category === action.payload){ // action.payload sem .category pois é so uma string e nao um objeto
                    console.log(question.questions)
                    quizQuestions = question.questions
                }
            })
            return{
                ...state,
                questions: quizQuestions,
                gameStage: STAGES[2],
            } }
        case "REORDER_QUESTIONS": 
            // para reodernar as questoes, para elas smp serem aletoarias
            
             { const reorderedQuestions = state.questions.sort(() => {
                return Math.random() - 0.5;
            });
             
            return {
                ...state,
                questions: reorderedQuestions
            } } 

        case "CHANGE_QUESTION":
             { const nextQuestion = state.currentQuestion + 1;
              let endGame = false;
              
              if(!state.questions[nextQuestion]) {
                endGame = true
              }
            return{
                ...state,
                currentQuestion: nextQuestion,
                gameStage: endGame ? STAGES[3] : state.gameStage,
                answerSelected: false,
                help: false,
               
            } }
        case "NEW_GAME":
            return initialState;
        case "CHECK_ANSWER":
            { if (state.answerSelected) return state;
            
            const answer = action.payload.answer
            const option = action.payload.option
            let correctAnswer = 0
           
            if (answer === option) correctAnswer = 1
               
          
            
              
            return {
                ...state,
                score: state.score + correctAnswer,
                answerSelected: option,
            } }

        case "SHOW_TIP":
            return{
                ...state,
                help: "tip",
            }
        case "REMOVE_OPTION":

            { const questionWithoutOption = state.questions[state.currentQuestion];
            console.log("estado questão atual: ", state.currentQuestion);

            console.log("questão sem opção", questionWithoutOption);
            let repeat = true;
            let optionToHide;

            questionWithoutOption.options.forEach((option) => {
                if(option !== questionWithoutOption.answer && repeat && state.chancesOfDeletiong > 0){
                    optionToHide = option;
                    repeat = false;
                }
            });
            const deleting = state.chancesOfDeletiong - 1
            return {
                ...state,
                optionToHide,
                help: true,
                chancesOfDeletiong: deleting
            }; }
            
            
        default:
            return state
    }
}


// context aonde eu consumo
export const QuizContext = createContext()
// provider aonde eu vou habilitar(prover) o contexto
export const QuizProvider = ({ children }) =>{
    const value = useReducer( quizReducer, initialState )
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}