import axios from 'axios'
import jwtDecode from 'jwt-decode'
import { createContext, useEffect, useState, useContext } from 'react'
import { isValidToken, setSession } from '../utils/jwt'

const AuthContext = createContext(null)
AuthContext.displayName = 'auth'

const AuthProvider = ({ children }) => {
  const [authed, setAuthed] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)
  const [user, setUser] = useState(null)

  const loginAuth = async (username, password) => {
    const response = await axios.post('https://dummyjson.com/auth/login', {
      username,
      password
    })

    const user = response.data

    setSession(user.token)
    setUser(user)
    setAuthed(true)
  }

  const logoutAuth = () => {
    setSession(null)
    setAuthed(false)
    window.localStorage.removeItem('countries')
    window.localStorage.removeItem('searchCountries')
  }

  useEffect(() => {
    const accessToken = window.localStorage.getItem('accessToken')
    setIsInitialized(true)
    try {
      if (accessToken && isValidToken(accessToken)) {
        setSession(accessToken)
        setUser(jwtDecode(accessToken))
        setAuthed(true)
      } else {
        setAuthed(false)
        setUser(null)
      }
    } catch (error) {
      setAuthed(false)
      setUser(null)
    }
  }, [])

  const initialValues = {
    user,
    authed,
    loginAuth,
    logoutAuth,
    isInitialized
  }

  return (
    <AuthContext.Provider value={initialValues}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuthContext = () => {
  return useContext(AuthContext)
}

export { AuthProvider, useAuthContext }
