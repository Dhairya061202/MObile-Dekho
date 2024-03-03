import React from 'react'
import '../responsive/navBarResponsive.css'

function Offer({src, link,index}) {
  return (
    <a className='offer-image' href={link}>
        <img src={src} alt={`${index} offer`} />
    </a>
  )
}

export default Offer
