import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card.js'

export default function CardList() {
  const [cards, setCards] = useState([])

  function getCards() {
    axios.get('/getcards')
      .then(res => {
        setCards(res.data)
      })
      .catch(err => console.log(err))
  }

  const cardData = cards.map(card => {
    return (
        <Card
            {...card}
            key={card._id}
        />
    )
})

  useEffect(() => {
    console.log("In Card List, getting cards")
    getCards()
  }, [])

  return (
    <div className="card-list">
      {cardData}
    </div>
  )
}