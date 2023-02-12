import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import {productList} from '../data/Product_list'
import {useDispatch, useSelector} from 'react-redux'
import {addItem} from '../redux/reducer/cart'
// import Cart from '../redux/action/store'
import { useNavigate } from 'react-router-dom';

const Product = () => {
    
    const [alert, setAlert] =useState(false);
    const params = useParams();
    const props = productList.find((item) => item.id === parseInt(params.id));
    console.log(props)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const addToCart = (props) =>{
        setAlert(true);
        setTimeout(()=>setAlert(false),3000);
        dispatch(addItem(props));
    };
    const list = useSelector((state)=> state.cart.list);
    const element = list.find((item)=> item.payload.id === props.id);

  return (
    <div className='card m-2 d-flex align-items-center'>
        {alert && <span className='mt-2 alert alert-success'>Item added to cart</span>}
        <div className='mt-2'>
            <img src={props.thumbnail} height={320} width={380} alt={props.title} className='rounded'/>
        </div>
        <div className='card-body d-flex flex-column'>
            <h5 className='card-title'>{props.title}</h5>
            <h6 className='mt-2'>Price: {`$${props.price}`}</h6>
            <h6 className='mt-2'>Discount: {props.discountPercentage}%</h6>
            <h6 className='mt-2'>Rating: {props.rating}</h6>
            <div className='mt-4'>
            {
                props.stock > 0 ? 
                <>
                    <button className='btn btn-success' onClick={()=>navigate(`/checkout/${props.id}`)}>Buy Now</button>
                    {
                        element?.count > 0 ?
                            <button className='btn btn-outline-warning ms-2' onClick={()=> navigate('/cart')}>Go to Crat</button>
                        :
                            <button className='btn btn-success ms-2' onClick={()=> addToCart(props)}>Add to Crat</button> 
                    }
                    {/* <button className='btn btn-success ms-2' onClick={()=> addToCart(props)}>Add to Crat</button>  */}
                </>
                : 
                    <button className='btn btn-outline-danger'>Out of Stock</button>
            }
            </div>
        </div>
    </div>
  )
}

export default Product;