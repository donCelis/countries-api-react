import { Link, Navigate, useRoutes } from 'react-router-dom'
// auth
import Private from './guards/Private'
import Public from './guards/Public'

// components
import Login from './pages/Login'
import App from './pages/App'
import Country from './components/Country'
import Countries from './components/Countries'
import Search from './components/Search'

const Paths = () => {
  const element = useRoutes([
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
      element: (
        <div className='container text-center'>
          <p>Page not found</p>
          <Link to='/'>Back to home</Link>
        </div>
      )
    },
    {
      path: '*',
      element: <Navigate to='/404' replace />
    }
  ])

  return element
}

export default Paths
