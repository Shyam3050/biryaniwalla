import React from "react";
import { AiOutlineHome } from "react-icons/ai";

const RadioAdSelect = ({ id, value, onChangeSelect }) => {
  return (
    <div className="border flex items-center my-2 ">
      <label htmlFor={id} className=" cursor-pointer flex gap-2 w-full">
        <div className="w-[50px] h-[50px] border flex justify-center items-center ">
          <AiOutlineHome className="text-2xl font-bold " />
        </div>
        <div>
          <p className="font-semibold text-sm">Deliver to Home</p>
          <p className="text-xs">Hyderbad</p>
          <p className="text-xs">23 MINS</p>
        </div>
      </label>
      <input
        type="radio"
        name="adress"
        value={value}
        id={id}
        onChange={onChangeSelect}
        className="mr-2"
      />
    </div>
  );
};

export default RadioAdSelect;
