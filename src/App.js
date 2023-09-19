import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Aerocity from './components/Aerocity';
const App = () => {
  return (
    <Router>
     <>
      <Header/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Aerocity" Component={Aerocity}/>
      </Routes>
      <Footer/>
      </>
    </Router>
  )
}

export default App
 