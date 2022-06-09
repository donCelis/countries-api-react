import { Navigate } from 'react-router-dom'
import useAuthContext from '../hooks/useAuthContext'

export default function Public ({ children }) {
  const { authed } = useAuthContext()

  if (authed) {
    return <Navigate to='/countries' replace />
  }

  return <>{children}</>
}
