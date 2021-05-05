import React, { useState, useContext } from 'react'
import AuthForm from './AuthForm.js'
import { UserContext } from '../context/UserProvider.js'

const initInputs = { username: "", password: "" }

export default function Auth() {
  const [inputs, setInputs] = useState(initInputs)
  const [toggle, setToggle] = useState(false)

  const { signup, login, errMsg, resetAuthErr } = useContext(UserContext)

  function handleChange(e) {
    const { name, value } = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSignup(e) {
    e.preventDefault()
    signup(inputs)
    setInputs(initInputs)
  }

  function handleLogin(e) {
    e.preventDefault()
    login(inputs)
    setInputs(initInputs)
  }

  function toggleForm() {
    setToggle(prev => !prev)
    resetAuthErr()
  }

  return (
    <div className="auth-container">
      <h1>Magic Card Database</h1>
      { !toggle ?
        <>
          <AuthForm
            handleChange={handleChange}
            handleSubmit={handleSignup}
            inputs={inputs}
            btnText="Create Account"
            errMsg={errMsg}
          />
          <p >Already a user?<span className="sign-in-link" onClick={() => toggleForm()}> Sign In!</span></p>
        </>
        :
        <>
          <AuthForm
            handleChange={handleChange}
            handleSubmit={handleLogin}
            inputs={inputs}
            btnText="Login"
            errMsg={errMsg}
          />
          <p>New? <span className="create-acct-link" onClick={() => toggleForm()}>Create New Account</span></p>        </>
      }
    </div>
  )
}