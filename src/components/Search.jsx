import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useDataContext from '../hooks/useDataContext'

const Search = () => {
  const { filterCountries, sms, setCountries, countries } = useDataContext()
  const [error, setError] = useState('')

  const fetcher = async () => {
    try {
      const { data: countries, statusText } = await axios.get(
        'https://restcountries.com/v3.1/all'
      )
      if (statusText === 'OK') {
        setCountries(countries)
      } else {
        setError(statusText)
      }
    } catch (error) {
      setError(error)
    }
  }

  console.log(error)

  useEffect(() => {
    if (filterCountries.length === 0 && countries.length === 0) fetcher()
  }, [])

  if (sms.type === 'error') {
    return (
      <>
        <div className='alert alert-danger' role='alert'>
          {sms.message}
        </div>
      </>
    )
  }

  if (sms.type === 'success') {
    return (
      <>
        <div className='alert alert-success' role='alert'>
          {sms.message} <span>{filterCountries.length}</span>
        </div>
        <section className='row gy-4'>
          {filterCountries.map((index, key) => (
            <div key={key} className='col-12 col-sm-6 col-md-6 col-lg-3'>
              <Link to={`/countries/${index.name.common}`}>
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
      </>
    )
  }

  return (
    <>
      <div className='alert alert-info' role='alert'>
        Search for a country
      </div>
    </>
  )
}
export default Search
