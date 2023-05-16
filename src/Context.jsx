import React, { useEffect, useState } from 'react'
import { createContext,useCallback,useContext } from 'react'

export const AppContext=createContext();
export const useGlobalContext = () => {

     return useContext(AppContext)
}
export const Context = ({children}) => {
  useEffect(() => {
    var body=document.querySelector("body")

    body.classList.toggle('dark-theme',isDarkTheme)
   
  }, [])
  

  const getInitialDarkMode = () => {
    const preferDark = window.matchMedia('(prefers-color=scheme:dark)').matches;
    console.log(preferDark)
    const storedTheme=localStorage.getItem('darkTheme') === "true"

    return storedTheme || preferDark
  }
  const [isDarkTheme,setDarkTheme]= useState(getInitialDarkMode())
  const [searchTerm,setSearchTerm]=useState()
  
  const toggleDarkTheme = () =>
  {
    const newDarkTeme=!isDarkTheme
    setDarkTheme(newDarkTeme)
    localStorage.setItem("darkTheme",newDarkTeme)
    var body=document.querySelector("body")
  
    console.log(body.classList.toggle('dark-theme',newDarkTeme))
  }
  return (
    <AppContext.Provider value={{isDarkTheme,toggleDarkTheme,searchTerm,setSearchTerm}}>
        {children}
    </AppContext.Provider>
  )
}
