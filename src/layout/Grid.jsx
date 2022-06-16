import '../styles/grid.css'
import { Link } from 'react-router-dom'

const Grid = ({ entries = [], path = '' }) => {
  return entries.map((index, key) => (
    <div key={key} className='col-12 col-sm-6 col-md-6 col-lg-3'>
      <Link to={`${path}${index?.name.common}`} className='card text-decoration-none'>
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
  ))
}

export default Grid
