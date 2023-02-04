import React from 'react'
import Product from '../components/productCard';
import { productList } from '../data/Product_list';

const Dashboard = () => {
  return (
    <div className='d-flex flex-wrap justify-content-center p-3'>
      {productList.map((product)=><Product key={product.id} {...product}/>)}
    </div>
  )
}

export default Dashboard;