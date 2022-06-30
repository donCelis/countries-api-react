import '../styles/navbar.css'
import { useRef } from 'react'
import AccountPopover from './common/AccountPopover'

const NavBar = () => {
  const toggleRef = useRef(null)

  const handleToggle = () => {
    toggleRef.current.classList.toggle('show')
  }

  return (
    <nav className='navbar navbar-expand-lg navbar-dark sticky-top'>
      <div className='container'>
        <h3 className='navbar-brand' aria-current='page'>
          Where in the world?
        </h3>
        <button
          onClick={handleToggle}
          className='navbar-toggler'
          type='button'
          aria-controls='mainNavbar'
          aria-expanded='false'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div ref={toggleRef} className='collapse navbar-collapse gap-4' id='mainNavbar'>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className='nav-item dropdown'>
              <AccountPopover />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
