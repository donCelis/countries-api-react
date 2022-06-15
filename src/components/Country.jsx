import { useParams } from 'react-router-dom'
import useFetcher from '../hooks/useFetcher'
import useLocalData from '../hooks/useLocalData'

const Country = () => {
  const { name = '' } = useParams()

  const { data: country, error } = useFetcher(`https://restcountries.com/v3.1/name/${name}`)

  if (error) return <p>{error.message}</p>

  const countriesCache = JSON.parse(window.localStorage.countries || '[]')

  useLocalData(countriesCache)

  return (
    <>
      <p>{country[0].name.common}</p>
      <p>{country[0].capital}</p>
      <img
        width={400}
        height={300}
        src={country[0].flags.svg}
        alt={country[0].name.common}
      />
    </>
  )
}
export default Country
