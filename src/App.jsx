import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Body from './Components/Body'


function App() {
  const [count, setCount] = useState(0)
  
  return(
    <div>
      <Navbar />
      <Body />
      <Body />
      <Body />
      <Body />
      <Body />
      <Body />

      <Footer />
    </div>
  )
}

export default App
