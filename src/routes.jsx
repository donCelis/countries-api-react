import { Navigate, useRoutes } from 'react-router-dom'
// auth
import Private from './guards/Private'
import Public from './guards/Public'

// components
import Login from './pages/Login'
import App from './pages/App'
import Country from './components/Country'
import Countries from './components/Countries'
import Search from './components/Search'
import NotFound from './pages/NotFound'
import { AnimatePresence } from 'framer-motion'

const Paths = () => {
  const router = useRoutes([
    {
      path: '/',
      element: <Navigate to='/login' replace />
    },
    {
      path: '/login',
      element: (
        <Public>
          <Login />
        </Public>
      ),
      index: true
    },
    {
      path: '/countries',
      element: (
        <Private>
          <App />
        </Private>
      ),
      children: [
        {
          element: <Countries />,
          index: true
        },
        {
          path: ':name',
          element: <Country />
        },
        {
          path: 'search',
          element: <Search />
        }
      ]
    },
    {
      path: '/404',
      element: <NotFound />
    },
    {
      path: '*',
      element: <Navigate to='/404' replace />
    }
  ])

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      {router}
    </AnimatePresence>
  )
}

export default Paths
