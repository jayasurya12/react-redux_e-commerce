import React from 'react'
import { useParams } from 'react-router-dom';
import {productList} from '../data/Product_list'

const Product = () => {
    const params = useParams();
    const ProductItem =productList.find((item)=>parseInt(params.id) === item.id);
    console.log(params)
  return (
    <div className='card m-2'>
        <div className='mt-4'>
            <img src={ProductItem.thumbnail} height={320} width={380} alt={ProductItem.title} className='rounded'/>
        </div>
        <div className='card-body d-flex flex-column'>
            <h5 className='card-title'>{ProductItem.title}</h5>
            <h6 className='mt-2'>Price: {`$${ProductItem.price}`}</h6>
            <h6 className='mt-2'>Discount: {ProductItem.discountPercentage}%</h6>
            <h6 className='mt-2'>Rating: {ProductItem.rating}</h6>
            <div className='mt-2'>
                {
                    ProductItem.stock > 0 ? <button className='btn btn-success'>Available</button> : <button className='btn btn-outline-danger'>Out of Stock</button>
                }
            </div>
        </div>
    </div>
  )
}

export default Product;