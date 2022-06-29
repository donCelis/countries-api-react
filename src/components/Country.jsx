import '../styles/country.css'
import { Link, useParams } from 'react-router-dom'
import useFetcher from '../hooks/useFetcher'
import useLocalData from '../hooks/useLocalData'
import Page from '../layout/Page'
import Borders from './common/Borders'
import listFormat from '../utils/listFormat'
import { motion } from 'framer-motion'

const Country = () => {
  const { name: cname = '' } = useParams()

  const { data: country, error } = useFetcher(
    `https://restcountries.com/v3.1/alpha/${cname}`
  )

  if (error) return <p>{error.message}</p>

  const countriesCache = JSON.parse(window.localStorage.countries || '[]')

  useLocalData(countriesCache)

  const {
    flags,
    population,
    region,
    subregion,
    capital,
    tld,
    languages,
    borders,
    name,
    currencies
  } = country[0]

  const objValueCurrency = Object.values(currencies).map(item => item.name)
  const objValueLang = Object.values(languages)

  return (
    <Page title={name.common} name='country-details'>
      <div className='mb-5'>
        <Link
          className='btn-back d-inline-block'
          to='/countries'
          aria-label='previous page'
        >
          Back
        </Link>
      </div>
      <motion.div
        className='row gx-md-5 gy-5 gy-lg-0 align-items-center'
        animate={{
          y: [100, 0],
          opacity: [0, 1],
          transition: { duration: 0.4 }
        }}
      >
        <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
          <div>
            <img className='flag img-fluid' src={flags.svg} alt={name.common} />
          </div>
        </div>
        <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
          <article>
            <h3>{name.common}</h3>
            <div className='row my-5'>
              <div className='col-6'>
                <div>
                  <p>
                    <strong>native name: </strong>
                    {name.official}
                  </p>
                  <p>
                    <strong>population: </strong>
                    {population.toLocaleString('de-DE')}
                  </p>
                  <p>
                    <strong>region: </strong>
                    {region}
                  </p>
                  <p>
                    <strong>subregion: </strong>
                    {subregion}
                  </p>
                  <p>
                    <strong>capital: </strong>
                    {capital}
                  </p>
                </div>
              </div>
              <div className='col-6'>
                <div>
                  <p>
                    <strong>top level domain: </strong>
                    {tld}
                  </p>
                  <p>
                    <strong>currencies: </strong>
                    {listFormat(objValueCurrency)}
                  </p>
                  <p>
                    <strong>languages: </strong>
                    {listFormat(objValueLang)}
                  </p>
                </div>
              </div>
            </div>
            <div className='row'>
              <div>
                <p>Border Countries: </p>
                <Borders borders={borders} />
              </div>
            </div>
          </article>
        </div>
      </motion.div>
    </Page>
  )
}
export default Country
