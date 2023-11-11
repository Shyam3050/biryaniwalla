import { AiOutlineArrowLeft, AiOutlineHome } from "react-icons/ai";

import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <main className="my-24 w-[95%] md:w-[60%]  max-w-5xl mx-auto  -z-10">
      <div className="flex items-center py-2 border-b-2 ">
        <div className="mr-6 text-2xl">
          <AiOutlineArrowLeft />
        </div>
        <div>
          <p className="text-base">Restaurent Name</p>
          <p className="text-sm">1 Item</p>
        </div>
      </div>
      <CartItem />
      <CartItem />
      <CartItem />

      <div>
        <p className="font-bold mb-2">Bill Details</p>
        <div className="flex justify-between">
          <p> Item Total</p>
          <p>₹360</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Delivery Fee</p>
          <p>₹27</p>
        </div>
        <hr />
        <div className="flex justify-between font-bold">
          <p>To Pay</p>
          <p>₹387</p>
        </div>
      </div>
      <div className=" flex justify-between border-t-2 mt-8 -mb-8 p-1">
        <div className="flex gap-2">
          <div className="w-[50px] h-[50px] border flex justify-center items-center ">
            <AiOutlineHome className="text-2xl font-bold " />
          </div>
          <div>
            <p className="font-semibold text-sm">Deliver to Home</p>
            <p className="text-xs">Hyderbad</p>
            <p className="text-xs">23 MINS</p>
          </div>
        </div>
        <div>
          <Link to={"choose-address"}>
            <p className="text-orange-500 text-xs font-bold cursor-pointer">
              CHANGE
            </p>
          </Link>
        </div>
      </div>
      <div className=" flex justify-between items-center bg-orange-600 text-white p-2 mt-8">
        <div>
          <p className="text-base font-bold">₹387</p>
          <p className="text-sm -mt-1">Total bill</p>
        </div>
        <button className="bg-green-700 p-2 font-bold">MAKE PAYMENT</button>
      </div>
    </main>
  );
};

export default Cart;
