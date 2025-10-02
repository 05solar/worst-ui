import React from 'react'
// src/App.js
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Start from './pages/start'
import Signup from './pages/signup'
import Captcha from './pages/captcha'
import Captcha2 from './pages/captcha2'   
import Final from './pages/final'

import './index.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/captcha" element={<Captcha />} />
        <Route path="/captcha2" element={<Captcha2 />} />
        <Route path="/final" element={<Final />} />

      </Routes>
    </Router>
  )
}

export default App
