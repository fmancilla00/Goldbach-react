import React from 'react'
import './App.css'
import Home from './pages/Home'
import Intro from './pages/Intro'
import { Link, Route } from 'wouter'

function App() {

  return (
    <>
      <h1 className='main__title'>Conjetura de Goldbach</h1>
      <main className='main'>
        <div className="main_container">
          <Route path="/" component={Intro} />
          <Route path="/intro" component={Intro} />
          <Route path="/enter" component={Home} />
        </div>
        </main>
      </>
  )
}

export default App
