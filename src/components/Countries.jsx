import { useEffect } from 'react'
import useDataContext from '../hooks/useDataContext'
import useFetcher from '../hooks/useFetcher'

import Grid from '../layout/Grid'

const Countries = () => {
  const { countries, saveCountries, isCache } = useDataContext()

  const { data, error } = useFetcher('https://restcountries.com/v3.1/all', isCache)

  if (error) return <p>{error?.message}</p>

  useEffect(() => {
    saveCountries(isCache ? data : countries)
  }, [])

  return (
    <section className='row gy-4'>
      <Grid entries={isCache ? data : countries} />
    </section>
  )
}

export default Countries
