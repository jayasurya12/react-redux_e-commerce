import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Dashboard from '../container/Dashboard'
import Product from '../container/Product';
import Header from '../components/Header/Header.js';
// import Home from '../container/Home';

const Index = () => {
  return (
    <BrowserRouter>
    <Header/>
        <Routes>
            {/* <Route path='/' element={<Header/>}/> */}
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/product/:id' element={<Product/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Index