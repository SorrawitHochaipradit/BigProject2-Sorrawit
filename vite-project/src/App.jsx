import React from 'react'
import { Routes, Route, Link } from "react-router"
import Home from './page/Home'
import About from './page/About'
import NotFound from './page/NotFound'
import Data from './page/Data'


function App() {
  return (
    <div>
      <nav>
        <Link to={"/home"}>Home</Link>
        <Link to={"/data"}>Data</Link>
        <Link to={"/about"}>About</Link>
      </nav>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/data' element={<Data />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App