import React from 'react'
import { useGlobalContext } from './Context'
import {FaMoon,FaSun} from 'react-icons/fa'
import {BsFillMoonFill,BsFillSunFill} from 'react-icons/bs'
export const ThemeToggle = () => {
    const {isDarkTheme,toggleDarkTheme}=useGlobalContext()
  return (
    <>

    <div className='toggle-container'>
    <button onClick={toggleDarkTheme} className='dark-toggle'>
      {isDarkTheme ? <BsFillMoonFill id="moon"className='toggle-icon'/> :
        <BsFillSunFill id="sun" className='toggle-icon'/>}</button>
      </div>
    </>
  )
}
