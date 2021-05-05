import React, { useContext } from 'react'
import CardForm from './CardForm.js'
import { UserContext } from '../context/UserProvider.js'

export default function Profile() {
  const {
    user: {
      username
    },
    addCard
  } = useContext(UserContext)

  return (
    <div className="profile">
      <h1>Welcome {username}!</h1>
      <h3>Add a new Magic Card:</h3>
      <CardForm addCard={addCard} buttonText="Add Card" />
    </div>
  )
}