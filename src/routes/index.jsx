import React from 'react'
import { Routes , Route} from 'react-router-dom'
import Widgets from '../widgets'
import Home from '../pages/Home'

const Routers = () => {
  return (
   <Routes>
        <Route path='/widgets' element={<Widgets/>}/>
        <Route path='/' element={<Home/>}/>
   </Routes>
  )
}

export default Routers
