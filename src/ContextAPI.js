import React, { useState } from 'react'
import { createContext } from 'react'

export const store = createContext();

function ContextAPI(props) {
    const [data,setData] = useState([
        {id: 1, categories:'Hollywood',mName: 'Harry Potter', mImage: "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg"},
        {id: 2, categories:'Hollywood',mName: 'Harry Potter', mImage: "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg"},
        {id: 3, categories:'Bollywood'},
        {id: 4, categories:'Food'}
    ])
  return (
    <store.Provider value={[data,setData]}>
        {props.children}
        {/* accepting componet will work as a children(contextAPI) */}
    </store.Provider>
  )
}

export default ContextAPI
//step- 1