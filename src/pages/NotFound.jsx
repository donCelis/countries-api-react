import { Link } from 'react-router-dom'

const NotFound = () => (
  <div className='container text-center'>
    <h1>404</h1>
    <p>Page not found</p>
    <Link to='/'>Back to home</Link>
  </div>
)

export default NotFound
