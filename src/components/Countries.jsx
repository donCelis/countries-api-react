import { useDataContext } from '../context/DataContext'
import useFetcher from '../hooks/useFetcher'
import useLocalData from '../hooks/useLocalData'
import Grid from '../layout/Grid'
import Page from '../layout/Page'

const Countries = () => {
  const { countries, isCache } = useDataContext()

  const { data, error } = useFetcher('https://restcountries.com/v3.1/all', isCache)

  if (error) return <p>{error?.message}</p>

  useLocalData(isCache ? data : countries)

  return (
    <Page title='List' name='countries'>
      <Grid entries={isCache ? data : countries} />
    </Page>
  )
}

export default Countries
