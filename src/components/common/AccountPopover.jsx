import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../context/AuthContext'
import { AnimatePresence, motion } from 'framer-motion'
import Avatar from './Avatar'

const variants = {
  open: {
    opacity: 1,
    scale: 1
  },
  closed: {
    opacity: 0,
    scale: 0
  }
}

const AccountPopover = () => {
  const navigate = useNavigate()
  const { logoutAuth, user } = useAuthContext()
  const [open, setOpen] = useState(false)

  const handleLogout = async () => {
    try {
      await logoutAuth()
      navigate('/login', { replace: true })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Avatar
        img={user?.image}
        onClick={() => setOpen(open => !open)}
        data-bs-auto-close='true'
      />
      <AnimatePresence>
        {open && (
          <motion.ul
            layout
            className='dropdown-menu dropdown-menu-start'
            initial='closed'
            exit='closed'
            animate={open ? 'open' : 'closed'}
            transition={{ duration: 0.2 }}
            variants={variants}
          >
            <li>
              <p className='px-3 py-1 m-0'>{user?.username}</p>
            </li>
            <li>
              <hr className='dropdown-divider' />
            </li>
            <li onClick={handleLogout}>
              <button className='dropdown-item'>Logout</button>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  )
}

export default AccountPopover
