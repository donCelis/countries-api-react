import { Navigate, Route, Routes, useLocation, useRoutes } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
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
import AnimationComp from './components/animation'

/* const Paths = () => {
  const location = useLocation()
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
    },
    {
      path: '/animation',
      element: <AnimationComp />
    }
  ])

  return (
    <AnimatePresence initial={false}>
      {router}
    </AnimatePresence>
  )
} */

const Paths = () => {
  const location = useLocation()
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes key={location.pathname} location={location}>
        <Route path='/' element={<Navigate to='/login' replace />} />
        <Route
          path='/login' element={
            <Public>
              <Login />
            </Public>
          }
          index
        />
        <Route
          path='/countries' element={
            <Private>
              <App />
            </Private>
        }
        >
          <Route element={<Countries />} index />
          <Route path=':name' element={<Country />} />
          <Route path='search' element={<Search />} />
        </Route>
        <Route path='/404' element={<NotFound />} />
        <Route path='*' element={<Navigate to='/404' replace />} />
      </Routes>
    </AnimatePresence>
  )
}

export default Paths
