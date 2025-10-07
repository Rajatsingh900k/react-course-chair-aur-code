import React from 'react'
import { createContext, useContext } from 'react'

export const TodoContext = createContext({
    todos: [
        {
            id:1,
            todoTitle:"msd",
            completed:false
        }
    ],
    addTodo: (todo)=>{},
    update:(id,todo)=>{},
    delete:(id)=>{},
    toggleComplete:(id)=>{}
})

export const useTodo = ()=>{
    return useContext(TodoContext)// which context we are talkign about, kinda reference.
}

export const TodoProvider = TodoContext.Provider