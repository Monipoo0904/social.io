import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'

import Fastfashion from './fastfashion'
import Foodinsecurity from './foodinsecurity'
import Home from './home'
import Chat from './chat'

const App = () => {
  return (
    <Router>
      
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/fastfashion" element={<Fastfashion/>}/>
          <Route exact path="/foodinsecurity" element={<Foodinsecurity/>}/>
          <Route exact path="/chat" element={<Chat/>}/>
        </Routes>
      
    </Router>
  );
}

export default App;