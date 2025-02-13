import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Prototyping from './Components/Prototyping'
import Iteration from './Components/Iteration';
import Brainstorming from './Components/Brainstorming';
import Deliverables from './Components/Deliverables';
import Resources from './Components/Resources';



function App() {
  const [count, setCount] = useState(0)
  
  return(
    <Router>
      <Navbar />
      <Routes>
        <Route path='/CapstoneProject' element={<Home />}/>
        <Route path='/brainstorming' element={<Brainstorming />}/>
        <Route path='/prototyping' element={<Prototyping />}/>
        <Route path='/iteration' element={<Iteration />}/>
        <Route path='/deliverables' element={<Deliverables />}/>
        <Route path='/resources' element={<Resources />}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
