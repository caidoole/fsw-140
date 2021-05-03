import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props){
  const { logout } = props
  return (
    <div className="navbar">
      <Link className='link' to="/profile">Profile</Link>
      <Link className='link' to="/cards">Cards</Link>
      <button onClick={logout}>Logout</button>
    </div>
  )
}