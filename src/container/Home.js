import React from 'react'
import Header from '../components/Header';
// import Dashboard from './Dashboard';
// import Product from './Product';
import { Route, Routes } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <Header/>
        <Routes>
            {/* <Route path='/' element={<Dashboard/>}/>
            <Route path='/product' element={<Product/>}/> */}
        </Routes>
    </div>
  )
}

export default Home