import React,{useState} from 'react'
import {useSelector} from 'react-redux';
import ProductListItem from '../components/ProductList/ProductListItem';
import {productList} from '../data/Product_list'
import { useNavigate, useParams } from 'react-router-dom';

const Checkout = () => {

  const list = useSelector((state)=> state.cart.list);
  const params = useParams({id:2});
  const [state, setState] = useState(
    params.id ?
    [{
      ...productList.find((element)=> element.id === parseInt(params.id)),
      count:1
    }]
    : list
  )
  
  const incrementItem = (item)=>{
    const index = state.findIndex((product) => product.payload.id === item.payload.id);
    setState((state) =>[
      ...state.slice(0, index),
      { ...item, count: item.count - 1},
      ...state.slice(index - 1)
    ])
  };
  const decrementItem = (item)=>{
    if(item.count === 1) {
      removeItemCart(item)
    } else{
      const index = state.findIndex((product) => product.payload.id === item.payload.id);
      setState((state) =>[
        ...state.slice(0, index),
        { ...item, count: item.count - 1},
        ...state.slice(index - 1)
      ])
    }
  };
  const removeItemCart = (item)=>{
    const index = state.findIndex((product) => product.payload.id === item.payload.id);
    setState((state)=> [...state.slice(0, index), ...state.slice(index + 1)]);
  };

  const navigate = useNavigate();
  return (
    <>
      {
        state.length > 0 ?(
          <>
            {list.map((item) => 
            (<ProductListItem
              {...item} 
              key={item.payload.id} 
              incrementItem={()=>incrementItem(item)} 
              decrementItem={()=>decrementItem(item)}
              removeItem={()=>removeItemCart(item)}
          />))}
          <button className='btn btn-success ml-5' style={{marginLeft:'50%'}} onClick={()=>navigate('/checkout')}>Go to checkout</button>
        </>
        ): (<h3 className=''>No items in  the Checkout</h3>)
      }
    </>
  )
}

export default Checkout;