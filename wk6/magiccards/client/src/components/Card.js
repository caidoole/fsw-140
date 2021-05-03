import React from 'react'

export default function Card(props){
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
    imageurl 
  } = props
  return (
    <div className="card">
      <h1>{ name }</h1>
      <p>Number in collection: { numbercollected } </p>
      <p>Type: { type }</p>
      <p>Color: { color }</p>
      <p>Mana: { manacost }</p>
      <p>Rarity: { rarity }</p>
      <p>Abilities: { abilities }</p>
      <p>Card Text: { flavor }</p>
      <p>Power: { power }</p>
      <p>Toughness: { toughness }</p>
      <p>Expansion: { expansion }</p>
      <p>Artist: { artist }</p>
      <p>Collector Number: { collectornumber }</p>
      <p>Art Style: { artstyle }</p>
      <img 
      src={ imageurl }
      alt={ name }
      />
    </div>
  )
}