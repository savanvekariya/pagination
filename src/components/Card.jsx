import React from 'react'

const Card = ({product}) => {

  return (
   <div className='card'>
    <img src={product.images[0]} alt={product.title}/>
    <p>{product.title}</p>
   </div>
  )
}

export default Card