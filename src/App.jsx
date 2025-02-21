import { useState } from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Home from './components/Home'
import Board from './components/Board'
import Task from './components/Task'

function App() {
  

  return (
    <div>
      <header>
        <Navbar/>
      </header>

      <main className='px-10'>
        <Home/>

     
        <Board/>

      </main>
      

      
    </div>
  )
}

export default App
