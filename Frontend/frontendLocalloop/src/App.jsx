import {  Routes, Route } from 'react-router-dom'
import './App.css'
import Signup from './app/signup/signup.jsx'

function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
      </Routes>
    </>
  )
}

export default App
