'use client'
import { useState, createContext, useContext } from 'react'

const apiContext = createContext(null)

export const ContextProvider = ({ children }) => {
  const [year, setYear] = useState()
  const [sub, setSub] = useState()

  const data = { year, sub, setYear, setSub }
  return <apiContext.Provider value={data}>{children}</apiContext.Provider>
}

export const useApiContextProvider = () => {
  const contextData = useContext(apiContext)
  if (!contextData) {
    throw new Error('context must be used inside the provider')
  }
  return contextData
}
