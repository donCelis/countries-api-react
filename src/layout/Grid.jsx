import '../styles/grid.css'
import { Link } from 'react-router-dom'
import lowerCase from '../utils/lowerCase'

const Grid = ({ entries = [], path = '' }) =>
  <section className='row gy-4'>
    {entries.map((index, key) => (
      <div key={key} className='col-12 col-sm-6 col-md-6 col-lg-3'>
        <Link
          to={`${path}${lowerCase(index?.cca3)}`}
          className='card text-decoration-none'
        >
          <article>
            <img
              loading='lazy'
              className='card-img-top'
              src={index?.flags.svg}
              alt={index?.name.common}
            />
            <div className='card-body'>
              <p className='card-title'>{index?.name.common}</p>
            </div>
          </article>
        </Link>
      </div>
    )
    )}
  </section>
export default Grid
