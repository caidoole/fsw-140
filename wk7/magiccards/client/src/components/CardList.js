import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card.js'

export default function CardList() {
  const [cards, setCards] = useState([])

  const userAxios = axios.create()
  userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
  })

  function getCards() {
    userAxios.get('/api/card/getcards')
      .then(res => {
        setCards(res.data)
      })
      .catch(err => console.log(err))
  }

  function deleteCard(cardId) {
    userAxios.delete(`/api/card/deletecard/${cardId}`)
      .then(res => {
        setCards(prevCard =>
          prevCard.filter(cardData =>
            cardData.id !== cardId))
      })
      .catch(err => console.log(err))
  }

  function editCollected(updates, cardId) {
    userAxios.put(`/api/card/updatecollected/${cardId}`, updates)
      .then(res => {
        setCards(prevCard =>
          prevCard.map(cardData =>
            cardData.id !== cardId ? cardData : res.data))
      })
      .catch(err => console.log(err))
    setEdit(cardId);
    getCards();
  }

  function setEdit(cardId) {
    let tempCard = [...cards]
    let index = cards.findIndex(card => card.id === cardId);
    if (tempCard[index].isEditable === undefined || tempCard[index].isEditable === false) {
      tempCard[index] = { ...tempCard[index], isEditable: true }
    } else {
      tempCard[index] = { ...tempCard[index], isEditable: false }
    }
    setCards(tempCard)
  }

  const cardData = cards.map(card => {
    return (
      <Card
        {...card}
        key={card.id}
        deleteCard={deleteCard}
        editCollected={editCollected}
        setEdit={setEdit}
      />
    )
  })

  useEffect(() => {
    getCards()
  }, [])

  return (
    <div className="card-list">
      {cardData}
    </div>
  )
}