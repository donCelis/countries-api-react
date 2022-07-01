import { useDataContext } from '../context/DataContext'
import useLocalData from '../hooks/useLocalData'
import Grid from '../layout/Grid'
import Page from '../layout/Page'
import SearchForm from './common/SearchForm'
import ViewSms from './common/ViewSms'

const Search = () => {
  const { filterCountries, sms, search } = useDataContext()

  const countriesCache = JSON.parse(window.localStorage.countries || '[]')
  const searchCountriesCache = JSON.parse(
    window.localStorage.searchCountries || '[]'
  )

  useLocalData(countriesCache)

  const stateError = sms.type === 'error' || searchCountriesCache.length === 0
  // const stateError = sms.type === 'error' || search.length === 0

  return (
    <Page title='Search' name='search'>
      <div className='row mb-5'>
        <SearchForm />
      </div>
      {stateError
        ? <ViewSms sms={sms?.message} alert='danger' />
        : (
          <ViewSms sms={sms?.message || 'Search for a country'} alert='success'>
            <span>{filterCountries.length || searchCountriesCache.length}</span>
            {/* <span>{search.length}</span> */}
          </ViewSms>
          )}
      {!stateError && (
        <Grid entries={searchCountriesCache} path='/countries/' />
      )}
      {/* {!stateError && (
        <Grid entries={search} path='/countries/' />
      )} */}
    </Page>
  )
}
export default Search
