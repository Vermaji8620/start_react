import React, { useState } from "react";
import Timings from "./Timings";

const InnerBox = (props) => {
  const [name, setname] = useState(props.name);
  const changename = () => {
    setname("button is clicked so name is changed");
  };
  return (
    <div className="bg-sky-400 p-4 flex items-center justify-between m-10 rounded-lg">
      <span>
        <Timings time_it={props.time_all} />
      </span>
      <span className="text-red-400 font-bold text-3xl">{name}</span>
      <span><button className="bg-green-100 rounded-lg p-2" onClick={changename}>Add To Cart</button>
      </span>
    </div>
  );
};

export default InnerBox;
