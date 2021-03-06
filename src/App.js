import React from 'react'
import './App.css'
import MainNav from './components/MainNav'
import Home from './components/Home'
import Footer from './components/Footer'

function App () {
  return (
    <div className="App is-family-sans-serif">
      <MainNav />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App
