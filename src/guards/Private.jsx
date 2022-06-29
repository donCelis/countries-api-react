import { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import Spinner from '../components/common/Spinner'
// hooks
import { useAuthContext } from '../context/AuthContext'
// pages
import Login from '../pages/Login'

export default function AuthGuard ({ children }) {
  const { authed, isInitialized } = useAuthContext()

  const { pathname } = useLocation()

  const [requestedLocation, setRequestedLocation] = useState(null)

  if (!isInitialized) {
    return <Spinner />
  }

  if (!authed) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname)
    }
    return <Login />
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null)
    return <Navigate to={requestedLocation} replace />
  }

  return <>{children}</>
}
