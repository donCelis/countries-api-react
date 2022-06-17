import jwtDecode from 'jwt-decode'
import axios from 'axios'

// ----------------------------------------------------------------------

const isValidToken = (accessToken) => {
  if (!accessToken) return false

  const { exp } = jwtDecode(accessToken)

  const currentTime = Date.now() / 1000

  return exp > currentTime
}

const setSession = (accessToken) => {
  if (accessToken) {
    window.localStorage.setItem('accessToken', accessToken)
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`
  } else {
    window.localStorage.removeItem('accessToken')
    delete axios.defaults.headers.common.Authorization
  }
}

export { isValidToken, setSession }
