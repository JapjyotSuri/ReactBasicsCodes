import React, { useState } from 'react'
import PracContext from './PracContext'

const PracContextProvider = ({children}) => {
    const [value,setValue]=useState(0);
  return (
    <PracContext.Provider value={{value,setValue}}>
        {children}
    </PracContext.Provider>
  )
}

export default PracContextProvider
