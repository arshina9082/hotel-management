import React from "react";
export default function Sidebar(props) {
  return (
    <div className="d-flex flex-column card border-0 bg-grey text-white text-center me-4 mt-5 h-100">
      <div className=" my-2 ">Total Booked Rooms: {props.roomCount}</div>
      <div className=" my-2 ">Total Amount: ₹{props.totalAmount}</div>
    </div>
  );
}
