import useSWR from 'swr'

import fetcher from '../services'

const useFetcher = (baseUrl, state = true) =>
  useSWR(state ? baseUrl : null, fetcher, {
    suspense: true
  })

export default useFetcher
