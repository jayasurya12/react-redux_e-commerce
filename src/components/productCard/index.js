import React from 'react'
import { useNavigate } from 'react-router-dom'

const Index = (props) => {
  const navigate = useNavigate();

  return (
    <div className='card m-2 cursor-pointer d-flex align-items-center' style={{width:300}} role='button' onClick={()=> navigate(`/product/${props.id}`)}>
        <div className='mt-4'>
            <img src={props.thumbnail} height={150} width={180} alt={props.title} className='rounded'/>
        </div>
        <div className='card-body d-flex flex-column '>
            <h5 className='card-title'>{props.title}</h5>
            <h6 className='mt-2'>Price: {`$${props.price}`}</h6>
            <h6 className='mt-2'>Discount: {props.discountPercentage}%</h6>
            <h6 className='mt-2'>Rating: {props.rating}</h6>
            <div className='mt-4'>
            {
                props.stock > 0 ?
                <button className='btn btn-success'>Available</button>
                : 
                <button className='btn btn-outline-danger'>Out of Stock</button>
            }
            </div>
        </div>
    </div>
  )
}

export default Index;