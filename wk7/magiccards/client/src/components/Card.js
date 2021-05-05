import React from 'react'
import CardForm from './CardForm'

export default function Card(props) {
  const {
    numbercollected,
    name,
    color,
    manacost,
    type,
    rarity,
    abilities,
    flavor,
    power,
    toughness,
    expansion,
    artist,
    collectornumber,
    artstyle,
    imageurl,
    id,
    deleteCard,
    editCollected,
    setEdit,
    isEditable
  } = props

  return (
    <div className="card">
      {!isEditable ?
        <>
          <h1 className='card-name'>{name}</h1>
          <img className='card-url-image'
            src={imageurl}
            alt={name}
          />
          <p>Number in collection: {numbercollected}</p>
          <p>Type:{type}</p>
          <p>Color: {color}</p>
          <p>Mana: {manacost}</p>
          <p>Rarity: {rarity}</p>
          <p>Abilities: {abilities}</p>
          <p>Card Text: {flavor}</p>
          <p>Power: {power}</p>
          <p>Toughness: {toughness}</p>
          <p>Expansion: {expansion}</p>
          <p>Artist: {artist}</p>
          <p>Collector Number: {collectornumber}</p>
          <p>Art Style: {artstyle}</p>
          <button onClick={() => deleteCard(id)}> Delete</button>
          <button onClick={() => setEdit(id)}>Edit</button>
        </>
        :
        <>
          <CardForm
            numbercollected={numbercollected}
            name={name}
            color={color}
            manacost={manacost}
            type={type}
            rarity={rarity}
            abilities={abilities}
            flavor={flavor}
            power={power}
            toughness={toughness}
            expansion={expansion}
            artist={artist}
            collectornumber={collectornumber}
            artstyle={artstyle}
            imageurl={imageurl}
            id={id}
            isEditable={isEditable}
            buttonText="submit edit"
            submit={editCollected}
          />
        </>
      }
    </div>
  )
}