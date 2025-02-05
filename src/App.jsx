import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Components/Home'


function App() {
  const [count, setCount] = useState(0)
  
  return(
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
