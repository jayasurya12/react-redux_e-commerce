import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../container/Home'
import Dashboard from '../container/Dashboard'
import Product from '../container/Product';
import Header from '../components/Header/Header.js';
import Cart from '../container/Cart'
// import Home from '../container/Home';

const Index = () => {
  return (
    // <BrowserRouter>
    // <Header/>
    //     <Routes>
            
    //         {/* <Route path='/' element={<Header/>}/> */}
    //         <Route path='/' element={<Dashboard/>}/>
    //         <Route path='/product/:id' element={<Product/>}/>
    //         <Route path='/cart' element = {<Cart/>}/>

    //     </Routes>
    // </BrowserRouter>
    
    <BrowserRouter>
    <Home/>    
    </BrowserRouter>

  )
}

export default Index