import { createContext, useState } from 'react'

const DataContext = createContext(null)

const methods = () => {
  const [countries, setCountries] = useState(() => {
    const localCountries = JSON.parse(window.localStorage.getItem('countries')) || []
    return localCountries.length === 0 ? [] : localCountries
  })

  const [filterCountries, setFilterCountries] = useState([])
  const [sms, setSms] = useState({ type: '' })

  const saveCountries = (countries) => {
    const localCountries = JSON.parse(window.localStorage.getItem('countries')) || []
    if (localCountries.length === 0) {
      console.log('save')
      setCountries(countries)
      window.localStorage.setItem('countries', JSON.stringify(countries))
    } else {
      console.log('get')
      setCountries(countries)
    }
  }

  // filter countries
  const handlefilterCountries = (value) => {
    const filteredCountries = countries.filter((country) => {
      // return country.name.common.toLowerCase().includes(value.toLowerCase())
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
    setCountries,
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
