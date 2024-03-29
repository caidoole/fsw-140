import React from 'react'

export default function AuthForm(props) {
  const {
    handleChange,
    handleSubmit,
    btnText,
    errMsg,
    inputs: {
      username,
      password
    }
  } = props

  return (
    <form className='user-form' onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        name="username"
        onChange={handleChange}
        placeholder="Username"
        required />
      <input
        type="password"
        value={password}
        name="password"
        onChange={handleChange}
        placeholder="Password"
        required />
      <button className='create-button'>{btnText}</button>
      <p style={{ backgroundColor: "#c00000", color: "#ffffff", textAlign: "center" }}>{errMsg}</p>
    </form>
  )
}