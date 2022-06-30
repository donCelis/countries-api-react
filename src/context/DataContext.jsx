import axios from 'axios'
import { createContext, useState, useContext } from 'react'

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
  const [search, setSearch] = useState([])
  const [sms, setSms] = useState({ type: '' })

  // save countries to localStorage
  const saveCountries = (entries = []) => {
    if (isCache) {
      setCountries(entries)
      window.localStorage.countries = JSON.stringify(entries)
    } else {
      setCountries(entries)
    }
  }

  const searchCountries = async (search) => {
    try {
      const { data } = await axios.get(`https://restcountries.com/v3.1/name/${search}`)
      window.localStorage.searchCountries = JSON.stringify(data)
      setSearch(data)
      setSms({
        type: 'success',
        message: 'Countries found'
      })
    } catch (error) {
      setSearch([])
      setSms({
        type: 'error',
        message: 'Search not found 404'
      })
    }
  }

  // filter countries
  const handlefilterCountries = (value) => {
    const filteredCountries = countries.filter((country) => {
      return country.name.common.toLowerCase().match(value.toLowerCase())
    })

    if (filteredCountries.length === 0) {
      window.localStorage.searchCountries = JSON.stringify([])
      setFilterCountries([])
      setSms({
        type: 'error',
        message: 'Search not found'
      })
    } else {
      window.localStorage.searchCountries = JSON.stringify(filteredCountries)
      setFilterCountries(filteredCountries)
      setSms({
        type: 'success',
        message: 'Countries found'
      })
    }
  }

  return {
    search,
    searchCountries,
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

const useDataContext = () => {
  return useContext(DataContext)
}

export { useDataContext, DataProvider }
