import React from 'react'
import './App.css'
import MainNav from './components/MainNav'
import Home from './components/Home'
import Footer from './components/Footer'

function App () {
  return (
    <div className="App is-family-sans-serif">
      <MainNav />
      <main className="is-flex is-align-items-center">
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App
