import React from 'react'
import createRoot from "react-dom"
import App from './App'
import "./index.css"
import { BrowserRouter } from 'react-router-dom'
import Tutorials from './Components/SideBar/Tutorials'


const Index = () => {
  return (
    
      <>
      
        <BrowserRouter>
        <App/>
        </BrowserRouter>
        
        
    
        </>
  )
}

createRoot.render(
  <Index />,
  document.querySelector('#root')
)
