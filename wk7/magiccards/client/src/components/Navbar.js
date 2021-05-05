import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'

export default function Navbar() {
  const { logout, token } = useContext(UserContext)
  return (
    <div className="navbar">
      { token && <Link className='link' to="/profile">Profile</Link>}
      { token && <Link className='link' to="/cards">Card List</Link>}
      { token && <button className='logout' onClick={logout}>Logout</button>}
    </div>
  )
}