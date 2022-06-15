import { createContext, useState } from 'react'

const DataContext = createContext(null)
DataContext.displayName = 'countries'

const methods = () => {
  const [countries, setCountries] = useState(() => {
    const cache = window.localStorage.countries
      ? JSON.parse(window.localStorage.countries)
      : []
    return cache
  })

  const isCache = countries.length === 0

  const [filterCountries, setFilterCountries] = useState([])
  const [sms, setSms] = useState({ type: '' })

  const saveCountries = (entries = []) => {
    if (isCache) {
      setCountries(entries)
      window.localStorage.countries = JSON.stringify(entries)
      console.log('save')
    } else {
      setCountries(entries)
      console.log('get')
    }
  }

  // filter countries
  const handlefilterCountries = (value) => {
    const filteredCountries = countries.filter((country) => {
      return country.name.common.toLowerCase().match(value.toLowerCase())
    })

    if (filteredCountries.length === 0) {
      setFilterCountries([])
      setSms({
        type: 'error',
        message: 'Search not found'
      })
    } else {
      setFilterCountries(filteredCountries)
      setSms({
        type: 'success',
        message: 'Countries found'
      })
    }
  }

  return {
    countries,
    isCache,
    saveCountries,
    filterCountries,
    handlefilterCountries,
    sms
  }
}

const DataProvider = ({ children }) => {
  const initialValues = methods()
  return (
    <DataContext.Provider value={initialValues}>
      {children}
    </DataContext.Provider>
  )
}

export { DataContext, DataProvider }
