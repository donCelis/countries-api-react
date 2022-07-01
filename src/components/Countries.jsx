import { useDataContext } from '../context/DataContext'
import useFetcher from '../hooks/useFetcher'
import useLocalData from '../hooks/useLocalData'
import Grid from '../layout/Grid'
import Page from '../layout/Page'
import SearchForm from './common/SearchForm'
import Animate from './Animate'

const Countries = () => {
  const { countries, isCache } = useDataContext()

  const { data, error } = useFetcher('https://restcountries.com/v3.1/all', isCache)

  if (error) return <p>{error?.message}</p>

  useLocalData(isCache ? data : countries)

  return (
    <Page title='List' name='countries'>
      <div className='row mb-5'>
        <SearchForm />
      </div>
      <Animate>
        <Grid entries={isCache ? data : countries} />
      </Animate>
    </Page>
  )
}

export default Countries
