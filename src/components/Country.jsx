import { useParams, useLocation } from 'react-router-dom'
import useFetcher from '../hooks/useFetcher'

const Country = () => {
  const { name = '' } = useParams()
  const location = useLocation()

  console.log(location)

  const { data: country, error } = useFetcher(
    { url: `https://restcountries.com/v3.1/name/${name}` }
  )

  if (error) return <p>{error}</p>

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
