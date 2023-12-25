import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom"


import Nav from "./components/Nav"
import HomePage from "./components/HomePage"
import About from "./components/About"
import Explore from "./components/Explore"
import Courses from "./components/Courses"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "/src/styles.css"



function App() {

  return (
    <BrowserRouter>
      <Nav/>
      <div className="app">
        <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
