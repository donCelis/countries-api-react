import { useDataContext } from '../context/DataContext'
import useLocalData from '../hooks/useLocalData'
import Grid from '../layout/Grid'

const Search = () => {
  const { filterCountries, sms } = useDataContext()

  const countriesCache = JSON.parse(window.localStorage.countries || '[]')
  const searchCountriesCache = JSON.parse(
    window.localStorage.searchCountries || '[]'
  )

  useLocalData(countriesCache)

  if (sms.type === 'error' || searchCountriesCache.length === 0) {
    return (
      <>
        <div className='text-center alert alert-danger' role='alert'>
          {sms.message || 'Search not found'}
        </div>
      </>
    )
  }

  return (
    <>
      <div className='text-center alert alert-success' role='alert'>
        {sms.type === 'success'
          ? (<>{sms.message} <span>{filterCountries.length}</span></>)
          : 'Search for a country'}
      </div>
      <section className='row gy-4'>
        <Grid entries={searchCountriesCache} path='/countries/' />
      </section>
    </>
  )
}
export default Search
