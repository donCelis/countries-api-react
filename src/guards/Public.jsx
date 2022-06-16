import { Navigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'

export default function Public ({ children }) {
  const { authed } = useAuthContext()

  if (authed) {
    return <Navigate to='/countries' replace />
  }

  return <>{children}</>
}
