import { useContext } from 'react'
import { DataContext } from '../context/DataContext'

const useDataContext = () => {
  const context = useContext(DataContext)

  if (!context) throw new Error('No hay un contexto activo')

  return context
}

export default useDataContext
