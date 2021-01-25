import React from 'react'

const nav = [
  { name: 'Services', path: '/#services', Component: 'Services' },
  { name: 'Contact', path: '/#contact', Component: 'Contact' }
]
class MainNav extends React.Component {
  render () {
    return (
            <header>
                <nav className=" p-4">
                    <div className="">
                      <a href="https://www.linkedin.com/in/alfrock/" target="_blank" rel="noreferrer" className="icon" style={{ height: '2.2rem', width: '2.2rem' }}><img src="/images/linkedin-black.png" /></a>
                    </div>
                    <ul className="is-inline-flex navbar-items">
                        <li className="navbar-item"><a href="/images/stratified-governance-model.jpg" target="_blank">Governance</a></li>
                    </ul>
                </nav>
            </header>
    )
  }
}
export default MainNav
