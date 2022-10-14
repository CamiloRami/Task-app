import React from 'react'
import { useCookies } from 'react-cookie'
import { login } from './services/taskApi'

function useAuth() {
  const [user, setUser] = React.useState(null)
  const [ isLogged, setIsLogged ] = React.useState(false)
  const [cookies, setCookie, removeCookie] = useCookies(['token'])

  const loginApp = async (email, password) => {
    const { user, token } = await login(email, password)
    setUser(user)
    setIsLogged(true)
    setCookie('token', token, { path: '/' })
  }

  const logout = () => {
    setUser(null)
    setIsLogged(false)
    removeCookie('token', { path: '/' })
  }

  const signUp = async (email, password) => {
    // TODO
  }

  return { user, isLogged, login: loginApp, logout, signUp, token: cookies.token }
}

export { useAuth }