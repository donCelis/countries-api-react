import { useEffect, useRef } from 'react'
import { useDataContext } from '../../context/DataContext'

const Select = () => {
  const { filterByRegion } = useDataContext()
  const selectRef = useRef()

  const handleChange = async () => {
    await filterByRegion(selectRef.current.value)
  }

  const region = window.localStorage.byRegion || ''

  return (
    <select value={region} ref={selectRef} onChange={handleChange}>
      <option value=''>Filter by Region</option>
      <option value='Africa'>Africa</option>
      <option value='Americas'>Americas</option>
      <option value='Asia'>Asia</option>
      <option value='Europe'>Europe</option>
      <option value='Oceania'>Oceania</option>
    </select>
  )
}

export default Select
