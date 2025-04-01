import { useState } from 'react'

import './App.css'
import Header from './Header/Header'
import Home from './Pages/Home/Home'
import About from './Pages/Home/About/About'
import Shop from './Pages/Home/Shop/shop'
import News from './Pages/Home/News/News'
import Contact from './Pages/Home/Contact/Contact'
import Sidebar from './Sidebar/Sidebar'
import Footer from './Pages/Home/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home/>
      {/* <About/> */}
      {/* <Shop/> */}
      {/* <News/> */}
      {/* <Contact/> */}
      {/* <Footer/> */}
      {/* <Sidebar/> */}

    </>
  )
}

export default App
