import { useDataContext } from '../context/DataContext'
import useLocalData from '../hooks/useLocalData'
import Grid from '../layout/Grid'

const Search = () => {
  const { filterCountries, sms } = useDataContext()

  const countriesCache = JSON.parse(window.localStorage.countries || '[]')

  useLocalData(countriesCache)

  if (sms.type === 'error') {
    return (
      <>
        <div className='alert alert-danger' role='alert'>
          {sms.message}
        </div>
      </>
    )
  }

  if (sms.type === 'success') {
    return (
      <>
        <div className='alert alert-success' role='alert'>
          {sms.message} <span>{filterCountries.length}</span>
        </div>
        <section className='row gy-4'>
          <Grid entries={filterCountries} path='/countries/' />
        </section>
      </>
    )
  }

  return (
    <>
      <div className='alert alert-info' role='alert'>
        Search for a country
      </div>
    </>
  )
}
export default Search
