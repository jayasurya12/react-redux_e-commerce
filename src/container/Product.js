import React from 'react'
import { useParams } from 'react-router-dom';
import {productList} from '../data/Product_list'
import {useDispatch, useSelector} from 'react-redux'
import {addItem} from '../redux/reducer/cart'
// import Cart from '../redux/action/store'
import { useNavigate } from 'react-router-dom';

const Product = () => {
    const params = useParams();
    const props = productList.find((item) => item.id === parseInt(params.id));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const addToCart = (props) =>{
        dispatch(addItem(props));
    };
    const list = useSelector((state)=> state.cart.list);
    const element = list.find((item)=> item.payload.id === props.id);
  return (
    <div className='card m-2 d-flex align-items-center'>
        <div className='mt-4'>
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
                    <button className='btn btn-success'>Buy Now</button>
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