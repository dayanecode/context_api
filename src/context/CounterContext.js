// 1 - criar context (pode ser o valor ou a forma de mudar o valor)
import { createContext, useState } from 'react'

export const CounterContext = createContext();

// 2- criar provider (vai mudar dependendo do tipo de contexto)
export const CounterContextProvider = ({children}) => {
    
    const [counter, setCounter] = useState(5);

    return (
        <CounterContext.Provider value={{counter, setCounter}}>
            {children}
        </CounterContext.Provider>
    )
}