import { Link } from 'react-router-dom'
import useFetcher from '../hooks/useFetcher'
import useLocalData from '../hooks/useLocalData'

const Countries = () => {
  const { data: countries, error } = useFetcher('https://restcountries.com/v3.1/all')

  if (error) return <p>{error.message}</p>

  useLocalData(countries)

  return (
    <section className='row gy-4'>
      {countries.map((index, key) => (
        <div key={key} className='col-12 col-sm-6 col-md-6 col-lg-3'>
          <Link to={`${index.name.common}`} state=''>
            <article className='card'>
              <img
                loading='lazy'
                className='card-img-top'
                src={index.flags.svg}
                alt={index.name.common}
              />
              <div className='card-body'>
                <p className='card-title'>{index.name.common}</p>
              </div>
            </article>
          </Link>
        </div>
      ))}
    </section>
  )
}

export default Countries
