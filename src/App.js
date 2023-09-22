import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Aerocity from './components/Aerocity';
import Coworkingspaces from './components/Coworkingspaces';
const App = () => {
  return (
    <Router>
     <>
      <Header/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Aerocity" Component={Aerocity}/>
        <Route path="/Coworkingspaces" Component={Coworkingspaces}/>
      </Routes>
      <Footer/>
      </>
    </Router>
  )
}

export default App
 