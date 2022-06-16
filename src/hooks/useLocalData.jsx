import { useEffect } from 'react'
import { useDataContext } from '../context/DataContext'

const useLocalData = (countries = []) => {
  const { saveCountries } = useDataContext()

  useEffect(() => {
    saveCountries(countries)
  }, [])
}
export default useLocalData
