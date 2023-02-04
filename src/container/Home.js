import React from 'react'
import Header from '../components/Header';
import Dashboard from './Dashboard';
import { Route, Routes } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <Header/>
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
        </Routes>
    </div>
  )
}

export default Home