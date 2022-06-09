import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const useAuthContext = () => {
  const context = useContext(AuthContext)

  if (!context) throw new Error('No hay un contexto activo')

  return context
}

export default useAuthContext
