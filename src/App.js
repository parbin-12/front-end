import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Menu from './components/Menu'
import Services from './components/Services'
import Allergy from './components/Allergy'


const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Menu' element={<Menu/>}/>
          <Route path='/Services' element={<Services/>}/>
          <Route path='/Allergy' element={<Allergy/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;




