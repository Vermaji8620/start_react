import React from "react";

const Timings = (props) => {
  return (
    <div className="text-white p-2 rounded-xl text-center bg-black">
      <div>{props.time_it.month}</div>
      <div>{props.time_it.year}</div>
      <div>{props.time_it.date}</div>
    </div>
  );
};

export default Timings;
