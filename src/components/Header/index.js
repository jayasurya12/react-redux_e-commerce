import React from 'react'

const index = () => {
  return (
    <div className='p-3 bg-secondary'>
      <h3>E-commerce</h3>
      <div className='row justify-content-center pt-2 pb-1'>
        <div className='col-sm-12 col-md-7 col-lg-6 col-xl-5 d-flex'>
          <button className='btn btn-success me-4'>Home</button>
          <input className='form-control' type='search' placeholder='Search...'/>
          <button className='btn btn-success ms-4'>Cart</button>
        </div>
      </div>
    </div>
  )
}

export default index