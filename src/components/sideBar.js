import React from "react";
export default function Sidebar(props) {
  return (
    <div className="d-flex flex-column card border-0 bg-grey text-white text-center me-4 mt-5 h-100">
      <div className="btn my-2 btn-primary">
        Total Booked Rooms: {props.roomCount.length}
      </div>
      <div className="btn my-2 btn-primary">
        Total Amount: ₹{props.totalAmount}
      </div>
    </div>
  );
}
