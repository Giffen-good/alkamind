import React from 'react'
import { HashLink } from 'react-router-hash-link'

const nav = [
  { name: 'Services', path: '/#services', Component: 'Services' },
  { name: 'Contact', path: '/#contact', Component: 'Contact' },
  { name: 'Governance', path: '/#governance', Component: 'Governance' }
]
class MainNav extends React.Component {
  render () {
    return (
            <header>
                <nav className=" container is-max-desktop pr-4 pb-4 pt-4 pl-0">
                    <img className="logo" src="/images/logo.jpg" alt='Logo for Alkamind Consulting. It is depicted as a button icon with containing text that reads "Alkamind Consulting"' />
                    <ul className="is-inline-flex  is-align-items-center navbar-items is-size-5 is-size-6-mobile has-text-weight-semibold">
                        {nav.map((navItem, i) => {
                          return <li className="navbar-item" key={i}><HashLink smooth to={navItem.path}>{navItem.name}</HashLink></li>
                        })}
                        <li className="navbar-item">
                            <a href="https://www.linkedin.com/in/alfrock/" target="_blank" rel="noreferrer" className="icon" style={{ height: '2.2rem', width: '2.2rem' }}><img src="/images/linkedin-black.png" /></a>
                        </li>
                    </ul>
                </nav>
            </header>
    )
  }
}
export default MainNav
