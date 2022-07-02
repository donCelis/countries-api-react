import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../context/AuthContext'
import { AnimatePresence, motion } from 'framer-motion'
import Avatar from './Avatar'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'

const scaleInOut = {
  open: {
    opacity: 1,
    scale: 1
  },
  closed: {
    opacity: 0,
    scale: 0,
    transformOrigin: 'top right'
  }
}

const AccountPopover = () => {
  const navigate = useNavigate()
  const { logoutAuth, user } = useAuthContext()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  const handleLogout = async () => {
    try {
      await logoutAuth()
      navigate('/login', { replace: true })
    } catch (error) {
      console.error(error)
    }
  }

  useOnClickOutside(ref, () => open && setOpen(false))

  return (
    <>
      <Avatar
        ref={ref}
        img={user?.image}
        onClick={() => setOpen(!open)}
      />
      <AnimatePresence exitBeforeEnter initial={false}>
        {open && (
          <motion.ul
            className='dropdown-menu'
            variants={scaleInOut}
            initial='closed'
            exit='closed'
            animate={open ? 'open' : 'closed'}
            transition={{ duration: 0.2 }}
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
