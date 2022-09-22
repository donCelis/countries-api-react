import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDataContext } from '../../context/DataContext'

const SearchForm = () => {
  const searchRef = useRef()
  const navigate = useNavigate()
  const { handlefilterCountries, searchCountries } = useDataContext()

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (searchRef.current.value !== '') {
      handlefilterCountries(searchRef.current.value)
      // await searchCountries(searchRef.current.value)
      navigate('/countries/search')
      event.target.reset()
    }
  }

  return (
    <form className='d-flex' onSubmit={handleSubmit}>
      <input
        ref={searchRef}
        className='form-control me-2'
        type='search'
        placeholder='Search for a country...'
        aria-label='Search'
      />
      <button className='btn btn-outline-success' type='submit'>
        🔍
      </button>
    </form>
  )
}
export default SearchForm
