
/* eslint-disable no-case-declarations */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { useReducer, createContext, useEffect } from "react";

const stages = ["Creating", "Editing", "Searching"]
const inicialState = {
    todo: [],
    stage: stages[0],
    todoToEdit: null,
    indexToEdit: null,
    todoCompleted: [],
    newName: "",
    searchValues: [],
    searchItemId: null
}

const todoReducer = (state, action) => {
    switch(action.type){
        case "ADD_TODO":
        { 
            const todo = action.payload
            
            return {
                 ...state,
                 todo: todo
            }
        }
        case "DELETE_TODO":

            const indexDelete = action.payload
            const newTodos = state.todo.filter((_, index )=> index !== indexDelete)
            localStorage.setItem("todos", JSON.stringify(newTodos))
        return{
            ...state,
            todo: newTodos,
            stage: stages[0]
        }
        case "EDIT_TO_TRUE":
            const todoToEdit = action.payload.todoToEdit
            const indexToEdit = action.payload.index
     
            return{
                ...state,
                stage: stages[1],
                todoToEdit: todoToEdit,
                indexToEdit: indexToEdit,
            }
        case "EDIT":
            const newName = action.payload
            // eslint-disable-next-line no-self-assign
            const todosUptade = state.todo.map((t, index) => t === state.todoToEdit && index === state.indexToEdit ? t = newName : t = t)
            localStorage.setItem("todos", JSON.stringify(todosUptade))
            return {
                ...state,
                todo: todosUptade,
                stage: stages[0]
            }
        case "SEARCH":
            const searchItem = action.payload

            const todoToSearch = state.todo.filter((t) => t === searchItem  )
            let id;
            state.todo.map((todo, index) => todo === searchItem ? id = index : null)
            console.log(id)

             state.searchValues  = todoToSearch
            return {
                ...state,
                stage: stages[2],
                searchValues: todoToSearch,
                searchItemId: id,
            }
        case "CHECKED_TODO":
            const itemCompleted = action.payload
            return{
                ...state,
                todoCompleted: state.todoCompleted.includes(itemCompleted) ? state.todoCompleted.filter(i => i !== itemCompleted) : [...state.todoCompleted, itemCompleted],
                
            }
        default:
            return state

    }
}
// 
export const TodoContext = createContext()

export const TodoProvider = ({children}) => {
    const value = useReducer(todoReducer, inicialState)
    return <TodoContext.Provider value={value}> {children} </TodoContext.Provider>
}