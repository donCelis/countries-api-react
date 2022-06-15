import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
import { isValidToken, setSession } from '../utils/jwt'

const AuthContext = createContext(null)
AuthContext.displayName = 'auth'

const methods = () => {
  const [authed, setAuthed] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)

  const loginAuth = async (username, password) => {
    const response = await axios.post('https://dummyjson.com/auth/login', {
      username,
      password
    })

    const user = response.data

    setSession(user.token)
    setAuthed(true)
  }

  const logoutAuth = () => {
    setSession(null)
    setAuthed(false)
    window.localStorage.removeItem('countries')
  }

  useEffect(() => {
    const accessToken = window.localStorage.getItem('accessToken')
    setIsInitialized(true)
    try {
      if (accessToken && isValidToken(accessToken)) {
        setSession(accessToken)
        setAuthed(true)
      } else {
        setAuthed(false)
      }
    } catch (error) {
      setAuthed(false)
    }
  }, [])

  return {
    loginAuth,
    logoutAuth,
    authed,
    isInitialized
  }
}

const AuthProvider = ({ children }) => {
  const initialValues = methods()
  return (
    <AuthContext.Provider value={initialValues}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
