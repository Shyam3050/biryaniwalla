import React, { useContext } from "react";
import { BsCaretUpSquareFill } from "react-icons/bs";
import { BiMinus, BiPlus } from "react-icons/bi";
import CartContext from "../../context/CartContext";

const CartItem = () => {
  const  data = useContext(CartContext);
 console.log(data);
  return (
    <div className="my-4 border flex justify-between px-8 py-4">
      <div className="flex data-center">
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
          <button onClick={() => {data.addToCart()}}>
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
