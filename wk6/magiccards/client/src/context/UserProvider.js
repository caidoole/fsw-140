import React, { useState } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token")
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export default function UserProvider(props){
  const initState = { user: {}, token: ""}
  const [userState, setUserState] = useState(initState)

  function signup(credentials){
    axios.post('/auth/signup', credentials)
      .then(res => console.log(res))
      .catch(err => console.log(err.response.data.errMsg))
  }

  function login(credentials){
    axios.post('/auth/login', credentials)
    .then(res => console.log(res))
    .catch(err => console.log(err.response.data.errMsg))
  }

  return (
    <UserContext.Provider
      value={{
        ...userState,
        signup,
        login
      }}>
      { props.children }
    </UserContext.Provider>
  )
}