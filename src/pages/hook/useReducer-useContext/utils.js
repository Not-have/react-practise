import { createContext } from 'react'
export const Context = createContext()

export const intialState = {
    a:'#2196f3',
    b:'#7bcfa4'
}
export function reducer(prevState,action){
    console.log(prevState,action);
    let newPrevState = {...prevState}
    switch(action.type){
        case 'change-two':
            newPrevState.a = action.value
            return newPrevState
        case 'change-three':
            newPrevState.b = action.value
            return newPrevState
        default:
            return prevState
    }
}