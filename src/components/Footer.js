import React from 'react'

export default function Footer(props) {
  return (
    <div className='row bg-dark text-white text-center fixed-bottom d-flex align-items-between flex-row'>
      <button className='btn btn-info col-4' onClick={() => props.resetData()}>Clear All</button>
      <button className='btn btn-danger col-4'>Pay Now</button>
    </div>
  )
}
