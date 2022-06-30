import '../../styles/navbar.css'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../context/AuthContext'
import Avatar from './Avatar'

const NavBar = () => {
  const toggleRef = useRef(null)
  const navigate = useNavigate()

  const { authed, logoutAuth, user } = useAuthContext()

  const handleLogout = async () => {
    try {
      await logoutAuth()
      navigate('/login', { replace: true })
    } catch (error) {
      console.error(error)
    }
  }

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
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            {authed && (
              <li className='nav-item'>
                <button
                  onClick={handleLogout}
                  className='nav-link btn border-0'
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
          <Avatar img={user?.image} />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
