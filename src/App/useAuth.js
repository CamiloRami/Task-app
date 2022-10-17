import React from 'react'
import { login, signUp } from './services/taskApi'

function useAuth() {
  const [user, setUser] = React.useState(null)
  const [ isLogged, setIsLogged ] = React.useState(false)

  const loginApp = async (email, password) => {
    const res = await login(email, password)
    const user = await res.json()
    setUser(user)
    setIsLogged(true)
    return res
  }

  const logout = () => {
    setUser(null)
    setIsLogged(false)
  }

  const signUpApp = async (name, email, password) => {
    const res = await signUp(name, email, password)
    return res
  }

  return { user: user?.user, isLogged, login: loginApp, logout, signUp: signUpApp, token: user?.token }
}

export { useAuth }