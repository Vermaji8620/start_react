import React from "react";
import InnerBox from "./InnerBox";

const OuterBox = () => {
  const all_names = ["Nirma", "surf-excel", "Tide", "Maggi"];
  const time_all = [
    {
      date: 10,
      month: "September",
      year: 2021,
    },
    {
      date: 2,
      month: "March",
      year: 2022,
    },
    {
      date: 28,
      month: "January",
      year: 2023,
    },
    {
      date: 5,
      month: "June",
      year: 2023,
    },
  ];
  return (
    <div className="bg-yellow-400 m-auto rounded-[5%] w-1/2 p-2">
      <InnerBox name={all_names[0]} time_all={time_all[0]} />
      <InnerBox name={all_names[1]} time_all={time_all[1]} />
      <InnerBox name={all_names[2]} time_all={time_all[2]} />
      <InnerBox name={all_names[3]} time_all={time_all[3]} />
    </div>
  );
};

export default OuterBox;
