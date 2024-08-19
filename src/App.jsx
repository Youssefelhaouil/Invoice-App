import { useState,useEffect } from 'react';
import Header from './compenents/Header';



function App() {
  const[isDark,setDark]=useState(false);

  useEffect(() => {

    if (isDark) {
      document.body.classList.add('bg-dark-bg')
      document.body.classList.remove('bg-light-bg')

    } else {
      document.body.classList.add('bg-light-bg')
      document.body.classList.remove('bg-dark-bg')
    }

  }, [isDark])

  useEffect(()=>{

  },[])

  return (
    <>
    <Header isDark={isDark} setDark={setDark}/>
      
    </>
  )
}

export default App
