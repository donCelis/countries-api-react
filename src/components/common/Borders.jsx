import { Link } from 'react-router-dom'
import lowerCase from '../../utils/lowerCase'

const Borders = ({ borders }) => (
  <ul className='borders-list'>
    {borders?.map((element, id) => (
      <li key={id}>
        <Link
          className='text-decoration-none'
          to={`/countries/${lowerCase(element)}`}
        >
          {element}
        </Link>
      </li>
    )) || <li>No borders</li>}
  </ul>
)

export default Borders
