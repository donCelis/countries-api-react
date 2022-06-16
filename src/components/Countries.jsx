import useDataContext from '../hooks/useDataContext'
import useFetcher from '../hooks/useFetcher'
import useLocalData from '../hooks/useLocalData'
import Grid from '../layout/Grid'

const Countries = () => {
  const { countries, isCache } = useDataContext()

  const { data, error } = useFetcher('https://restcountries.com/v3.1/all', isCache)

  if (error) return <p>{error?.message}</p>

  useLocalData(isCache ? data : countries)

  return (
    <section className='row gy-4'>
      <Grid entries={isCache ? data : countries} />
    </section>
  )
}

export default Countries
