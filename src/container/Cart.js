import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import ProductListItem from '../components/ProductList/ProductListItem';
import './cart.css';
import { modifyItem, removeItem } from '../redux/reducer/cart';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const navigate = useNavigate();
  const list = useSelector((state)=> state.cart.list);
  const dispatch = useDispatch();

  const incrementItem = (item)=>{
    dispatch(modifyItem({...item, count: item.count + 1}))
  };
  const decrementItem = (item)=>{
    if(item.count === 1) {
      dispatch(removeItem(item))
    } else{
      dispatch(modifyItem({...item, count:item.count - 1}))
    }
  };
  const removeItemCart = (item)=>{
    dispatch(removeItem(item))
  };

  return (
    <>
      {
        list.length > 0 ?(
          <>
            {list.map((item) => 
            (<ProductListItem
              {...item.payload} 
              key={item.payload.id} 
              incrementItem={()=>incrementItem(item)} 
              decrementItem={()=>decrementItem(item)}
              removeItem={()=>removeItemCart(item)}
          />))}
          <button className='btn btn-success ml-5' style={{marginLeft:'50%'}} onClick={()=>navigate('/checkout')}>Go to checkout</button>
        </>
        ): (<h3 className=''>No items in  the cart</h3>)
      }
    </>
  )
}

export default Cart;