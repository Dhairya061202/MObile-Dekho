import React from 'react'
import '../styles/NavOptionCard.css'

function NavOptionCard({name,price,image,index}) {
  return (
    <div className='NavOptionCard'>
      <img src={image} alt={` ${index} Phone `} />
      <p>{name}</p>
      <span>{price}</span>
    </div>
  )
}

export default NavOptionCard
