import React,{useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [count, setCount] =useState(15);
    const navitage = useNavigate();
    useEffect(() => {
      
    setInterval(()=>{
        setCount((count)=> count-1)
    },1000);
    setTimeout(()=> navitage('/'),15000)
    }, [navitage])
    
  return (
    <h5 className='mt-5' style={{marginLeft:'25%'}}>Your Order have been placed successfully. You will be redirecte in {count} seconds.</h5>
  )
}

export default Search