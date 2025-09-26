import React from "react";

export default function Footer(props) {
  return (
    <div className="row  text-white text-center fixed-bottom d-flex justify-content-between flex-row my-2 mx-3">
      <button
        className="btn btn-secondary col-4"
        onClick={() => props.resetData()}
      >
        Clear All
      </button>
      <button className="btn btn-primary col-4">Pay Now</button>
    </div>
  );
}
