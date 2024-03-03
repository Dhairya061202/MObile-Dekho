import React from 'react'
import ProductReviewCard from './ProductReviewCard'
import '../styles/ProductReview.css'

function ProductReview({ProductReviews}) {
  return (
    <div className='productReviews'>
      {ProductReviews.map((item,index)=>(
        <ProductReviewCard key={item.image} index={index} price={item.price} name={item.name} image={item.image} review={item.review} />
      ))}
    </div>
  )
}

export default ProductReview
