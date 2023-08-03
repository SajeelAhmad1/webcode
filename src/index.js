import React from 'react'
import createRoot from "react-dom"
import App from './App'
import "./index.css"
import { BrowserRouter } from 'react-router-dom'

const Index = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

createRoot.render(
  <Index />,
  document.querySelector('#root')
)
