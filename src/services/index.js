import axios from 'axios'

const fetcher = async (...args) => {
  const res = await axios.get(...args)

  if (!res.status) {
    const error = new Error('An error occurred while fetching the data.')
    error.info = await res.data
    error.status = res.status
    throw error
  }

  return res.data
}

export default fetcher
