import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductListItem = (props) => {

  return (
    <div className='mt-4 d-flex align-items-center justify-content-center'>
      <img src={props.payload.thumbnail} height={150} width={180} alt={props.payload.title} className='rounded'/>
      <h5 className='card-title'>{props.payload.title}</h5>
      <h6 className='mt-2 me-4'>Price: {`$${props.payload.price}`}</h6>
      <h6 className='mt-2 me-4'>Discount: {props.discountPercentage}%</h6>
      <h6 className='mt-2 me-4'>Rating: {props.payload.rating}</h6>
      <button className='btn btn-danger ms-3' onClick={props.incrementItem}>+</button>
      <span className='ms-3'>Quantity {props.count}</span>
      <button className='btn btn-danger ms-3' onClick={props.decrementItem}>-</button>
      <button className='btn btn-danger ms-3' onClick={props.removeItem}>Remove</button>
    </div>
  )
}

export default ProductListItem