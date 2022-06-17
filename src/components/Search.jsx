import { useDataContext } from '../context/DataContext'
import useLocalData from '../hooks/useLocalData'
import Grid from '../layout/Grid'
import Page from '../layout/Page'
import ViewSms from './common/ViewSms'

const Search = () => {
  const { filterCountries, sms } = useDataContext()

  const countriesCache = JSON.parse(window.localStorage.countries || '[]')
  const searchCountriesCache = JSON.parse(
    window.localStorage.searchCountries || '[]'
  )

  useLocalData(countriesCache)

  const stateError = sms.type === 'error' || searchCountriesCache.length === 0

  return (
    <Page title='Search' name='search'>
      {stateError
        ? <ViewSms sms={sms?.message} alert='danger' />
        : (
          <ViewSms sms={sms?.message || 'Search for a country'} alert='success'>
            <span>{filterCountries.length || searchCountriesCache.length}</span>
          </ViewSms>
          )}
      {!stateError && (
        <Grid entries={searchCountriesCache} path='/countries/' />
      )}
    </Page>
  )
}
export default Search
