import React, {useEffect} from 'react'
import logoW from "../assets/logo-w.png"
import logoB from "../assets/logo-b.png"

const Logo = (theme) => {
  useEffect(() => {
    getTheme()
  }, [theme])

  const getTheme = () => {
    if(theme.theme === "dark"){
      return logoW
    } else {
      return logoB
    }
  }
  
  return (
    <>
      <img 
        src={getTheme()} 
        alt="logo" 
        width={150} 
        className="flex align-top dark:text-white" 
      />
    </>
  )
}

export default Logo
