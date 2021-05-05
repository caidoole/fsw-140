import React, { useState } from 'react'

export default function CardForm(props) {
  const initInputs = {
    name: props.name || "",
    numbercollected: props.numbercollected || 0,
    type: props.type || "",
    color: props.color || "",
    manacost: props.manacost || "",
    rarity: props.rarity || "",
    abilities: props.abilities || "",
    flavor: props.flavor || "",
    power: props.power || 0,
    toughness: props.toughness || 0,
    expansion: props.expansion || "",
    artist: props.artist || "",
    collectornumber: props.collectornumber || 0,
    artstyle: props.artstyle || "",
    imageurl: props.imageurl || "",
  }
  const [inputs, setInputs] = useState(initInputs)
  const { addCard, submit, isEditable, id, buttonText } = props

  function handleChange(e) {
    const { name, value } = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (isEditable) {
      submit(inputs, id)
    }
    else {
      addCard(inputs)
    }
    setInputs(initInputs)
  }

  const { name, numbercollected, type, color, manacost,
    rarity, abilities, flavor, power, toughness, expansion,
    artist, collectornumber, artstyle, imageurl } = inputs

  return (
    <div className='cf-container'>
      <form className="card-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Card Name" />
        <input
          type="text"
          name="numbercollected"
          value={numbercollected}
          onChange={handleChange}
          placeholder="# Collected" />
        <input
          type="text"
          name="type"
          value={type}
          onChange={handleChange}
          placeholder="Type" />
        <input
          type="text"
          name="color"
          value={color}
          onChange={handleChange}
          placeholder="Color" />
        <input
          type="text"
          name="manacost"
          value={manacost}
          onChange={handleChange}
          placeholder="Mana Cost" />
        <input
          type="text"
          name="rarity"
          value={rarity}
          onChange={handleChange}
          placeholder="Rarity" />
        <input
          type="text"
          name="abilities"
          value={abilities}
          onChange={handleChange}
          placeholder="Abilities" />
        <input
          type="text"
          name="flavor"
          value={flavor}
          onChange={handleChange}
          placeholder="Card Text?" />
        <input
          type="text"
          name="power"
          value={power}
          onChange={handleChange}
          placeholder="Power" />
        <input
          type="text"
          name="toughness"
          value={toughness}
          onChange={handleChange}
          placeholder="Toughness" />
        <input
          type="text"
          name="expansion"
          value={expansion}
          onChange={handleChange}
          placeholder="Expansion" />
        <input
          type="text"
          name="artist"
          value={artist}
          onChange={handleChange}
          placeholder="Artist" />
        <input
          type="text"
          name="collectornumber"
          value={collectornumber}
          onChange={handleChange}
          placeholder="Collecton Num." />
        <input
          type="text"
          name="artstyle"
          value={artstyle}
          onChange={handleChange}
          placeholder="Artstyle" />
        <input
          type="text"
          name="imageurl"
          value={imageurl}
          onChange={handleChange}
          placeholder="Image-url" />
        <br />
        <button className='cf-button'>{buttonText}</button>
      </form>
    </div>
  )
}