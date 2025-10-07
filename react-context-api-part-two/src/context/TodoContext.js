import React from 'react'
import { createContext, useContext } from 'react'

export const TodoContext = createContext({})

export const useTodo = ()=>{
    return useContext(TodoContext)// which context we are talkign about, kinda reference.
}

export const TodoProvider = TodoContext.Provider