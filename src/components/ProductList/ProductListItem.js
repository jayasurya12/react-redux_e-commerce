import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductListItem = (props) => {
  console.log(props)
  return (
    <div className='mt-4 d-flex align-items-center justify-content-center'>
      <img src={props.thumbnail} height={150} width={180} alt={props.title} className='rounded'/>
      <h5 className='card-title'>{props.title}</h5>
      <h6 className='mt-2 me-4'>Price: {`$${props.price}`}</h6>
      <h6 className='mt-2 me-4'>Discount: {props.discountPercentage}%</h6>
      <h6 className='mt-2 me-4'>Rating: {props.rating}</h6>
      <button className='btn btn-danger ms-3' onClick={()=>props.incrementItem(props.id)}>+</button>
      <span className='ms-3'>Quantity {props.count}</span>
      <button className='btn btn-danger ms-3' onClick={()=>props.decrementItem(props.id)}>-</button>
      <button className='btn btn-danger ms-3' onClick={()=>props.removeItem(props.id)}>Remove</button>
    </div>
  )
}

export default ProductListItem