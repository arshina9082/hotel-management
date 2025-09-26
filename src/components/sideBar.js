import React from 'react'
export default function Sidebar(props) {
    return (
        <div className='d-flex bg-primary text-white text-center fixed-right'>
            <div className='btn btn-warning'>Total Booked Rooms: 0</div>
            <div className='btn btn-success'>Total Amount: ₹{props.totalAmount}</div>
        </div>
    )
}
