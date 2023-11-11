import { AiOutlineClose, AiOutlineHome } from "react-icons/ai";

import {Link} from 'react-router-dom'
const ChAdress = () => {
  return (
    <main className="my-24 w-[95%] md:w-[60%]  max-w-5xl mx-auto  -z-10">
      <div className="flex justify-between items-center border-b-2">
        <div className="flex items-center py-2  ">
          <div className="mr-2 text-2xl cursor-pointer">
            <AiOutlineClose />
          </div>
          <div>
            <p className="text-sm font-bold">CHOOSE DELIVERY ADDRESS</p>
          </div>
        </div>
        <Link to="/cart/add-address">
        <p className="text-red-600 cursor-pointer">Add New</p>
        </Link>
      </div>
      <div className="flex justify-between items-center my-2">
        <label for="home" className="flex gap-2">
          <div className="w-[50px] h-[50px] border flex justify-center items-center ">
            <AiOutlineHome className="text-2xl font-bold " />
          </div>
          <div>
            <p className="font-semibold text-sm">Deliver to Home</p>
            <p className="text-xs">Hyderbad</p>
            <p className="text-xs">23 MINS</p>
          </div>
        </label>
        <input type="radio" className="mr-2" />
      </div>

      <div className="flex justify-center items-center p-2 bg-orange-600 cursor-pointer text-white">
        Continue...
      </div>
    </main>
  );
};

export default ChAdress;
