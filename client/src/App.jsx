import './App.css'
import { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './container/Home'
import Login from './components/Login'

 function App() {
  const [theme, setTheme] = useState("light")
  const navigate = useNavigate();

  // useEffect(() => {
  //   if(theme === "dark"){
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // })

  useEffect(() => {
    if(theme === "dark"){
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme])
  
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  useEffect(() => {
    const userInfo = sessionStorage.getItem('user') !== 'undefined' ? JSON.parse(sessionStorage.getItem('user')) : sessionStorage.clear();

    if (!userInfo) navigate('/login');
  }, []);

 

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}

export default App 
