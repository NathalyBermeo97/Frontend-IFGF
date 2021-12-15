import React,{useState} from 'react'

const Context =React.createContext({})

export function UsercontextProvider({children}){
    const[jwt,setJWT]=useState([])

    return <Context.Provider value={{jwt,setJWT}}>
        {children}
    </Context.Provider>
}