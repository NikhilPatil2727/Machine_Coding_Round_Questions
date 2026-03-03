import React from 'react'

import { useContext } from 'react'
import { ThemeContext } from '../Global'
const A = () => {
   const {setTheme,theme}=useContext(ThemeContext)

  return (
    <div>
        <button onClick={()=>theme==="light"?setTheme("dark"):setTheme("light")}>childButton</button>
    </div>
  )
}

export default A