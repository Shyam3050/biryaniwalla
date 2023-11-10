import React from "react";
import { BsCaretUpSquareFill } from "react-icons/bs";
import { BiMinus, BiPlus } from "react-icons/bi";

const CartItem = () => {
  return (
    <div className="my-4 border flex justify-between px-8 py-4">
      <div className="flex items-center">
        <BsCaretUpSquareFill className="text-red-700" />
        <div className=" ml-4">
          <p>Mutton biryani</p>
        </div>
      </div>
      <div className="flex gap-8">
        <div className="flex gap-2 border text-base">
          <button>
            <BiMinus className=" text-2xl " />
          </button>
          <p>2</p>
          <button>
            <BiPlus className=" text-2xl" />
          </button>
        </div>
        <div>
          <p className="font-semibold">₹ 360</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
