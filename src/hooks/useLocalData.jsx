import { useEffect } from 'react'
import useDataContext from './useDataContext'

const useLocalData = (countries = []) => {
  const { saveCountries } = useDataContext()

  useEffect(() => {
    saveCountries(countries)
  }, [])
}
export default useLocalData
