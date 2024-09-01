import React from 'react'
import { Routes , Route} from 'react-router-dom'
import Widgets from '../widgets'
import Home from '../pages/Home'
import Admin from '../pages/Admin'

const Routers = () => {
  return (
   <Routes>
        <Route path='/widgets' element={<Widgets/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={<Admin/>}/>

   </Routes>
  )
}

export default Routers
