import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Experience from './pages/Experience'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Navbar from './components/Navbar'
import "./App.css";
import Footer from './components/Footer'
import ProjectDisplay from './pages/ProjectDisplay'
import Error from './pages/Error'
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='*' element={<Error />} />
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/:id' element={<ProjectDisplay />} />
          <Route path='/experience' element={<Experience />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App