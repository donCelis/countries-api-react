import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useDataContext from '../hooks/useDataContext'
import useFetcher from '../hooks/useFetcher'

const Countries = () => {
  const { countries, saveCountries } = useDataContext()
  const isCache = countries.length === 0

  const { data, error } = useFetcher('https://restcountries.com/v3.1/all', isCache)

  if (error) return <p>{error.message}</p>

  useEffect(() => {
    isCache ? saveCountries(data) : saveCountries(countries)
  }, [isCache])

  return !isCache
    ? (
      <section className='row gy-4'>
        {countries.map((index, key) => (
          <div key={key} className='col-12 col-sm-6 col-md-6 col-lg-3'>
            <Link to={`${index.name.common}`}>
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
    : (
      <section className='row gy-4'>
        {data.map((index, key) => (
          <div key={key} className='col-12 col-sm-6 col-md-6 col-lg-3'>
            <Link to={`${index.name.common}`}>
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
