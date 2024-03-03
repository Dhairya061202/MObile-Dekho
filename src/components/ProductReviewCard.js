import React from 'react'
import '../styles/ProductReviewCard.css'
import '../responsive/navBarResponsive.css'

function ProductReviewCard({image,price,review,name,index}) {
  return (
    <div className='productReviewCard'>
        <img src={image} alt={` ${index} review `} />
        <h5>{review}</h5>
        <span>{name}</span>
        <b>{price}</b>
      
    </div>
  )
}

export default ProductReviewCard 
