import { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
// hooks
import useAuthContext from '../hooks/useAuthContext'
// pages
import Login from '../pages/Login'

export default function AuthGuard ({ children }) {
  const { authed, isInitialized } = useAuthContext()

  const { pathname } = useLocation()

  const [requestedLocation, setRequestedLocation] = useState(null)

  if (!isInitialized) {
    return <p>...Loading</p>
  }

  if (!authed) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname)
    }
    // return <Login />
    return <Navigate to='/login' replace />
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null)
    return <Navigate to={requestedLocation} replace />
  }

  return <>{children}</>
}
