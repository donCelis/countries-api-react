import axios from 'axios'
import useSWR from 'swr'

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

const useFetcher = (baseUrl, state = true) => {
  return useSWR(state ? baseUrl : null, fetcher, { suspense: true })
}

export default useFetcher
