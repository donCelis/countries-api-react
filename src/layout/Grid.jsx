import '../styles/grid.css'
import { Link } from 'react-router-dom'
import Card from './../components/common/Card'
import lowerCase from '../utils/lowerCase'

const Grid = ({ entries = [], path = '' }) => {
  return (
    <section className='row gy-5 gx-0 gx-sm-5'>
      {entries.map((index, key) => (
        <div
          key={key}
          className='col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3'
        >
          <Link
            to={`${path}${lowerCase(index?.cca3)}`}
            className='text-decoration-none'
          >
            <Card {...index} />
          </Link>
        </div>
      ))}
    </section>
  )
}
export default Grid
