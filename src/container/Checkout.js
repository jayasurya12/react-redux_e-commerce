import React,{useState} from 'react'
import {useSelector} from 'react-redux';
import ProductListItem from '../components/ProductList/ProductListItem';
import {productList} from '../data/Product_list'
import { useNavigate, useParams } from 'react-router-dom';

const Checkout = () => {

  const navigate = useNavigate();
  const list = useSelector((state)=> state.cart.list);
  const params = useParams();
  console.log(params, list)
  const [state, setState] = useState(
    params.id ?
    [{
      ...productList.find((element)=> element.id === parseInt(params.id)),
      count:1
    }]
    : list)
    console.log(list)
  const incrementItem = (item)=>{
    const index = state.findIndex((product) => product.payload.id === item.payload.id);
    setState((state) =>[
      ...state.slice(0, index),
      { ...item, count: item.count + 1},
      ...state.slice(index + 1)
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
        ...state.slice(index + 1)
      ])
    }
  };

  const removeItemCart = (item)=>{
    const index = state.findIndex((product) => product.payload.id === item.payload.id);
    setState((state)=> [...state.slice(0, index), ...state.slice(index + 1)]);
  };

  return (
    <>
      {
        state.length > 0 ?(
          <>
            {
              state.map((item) => (
                <ProductListItem
                  {...item} 
                  key={item.id} 
                  incrementItem={()=>incrementItem(item)} 
                  decrementItem={()=>decrementItem(item)}
                  removeItem={()=>removeItemCart(item)}
                />
              ))
            };
          <button className='btn btn-success ml-5' style={{marginLeft:'50%'}} onClick={()=>navigate('/success')}>
             Place order 
          </button>
        </>
        ): (<h3 className=''>No items in  the Checkout</h3>)
      }
    </>
  )
}

export default Checkout;