import { AiOutlineClose, AiOutlineHome } from "react-icons/ai";

import { Link } from "react-router-dom";
import RadioAdSelect from "./RadioAdSelect";
import { useState } from "react";
const ChAdress = () => {
  const [selectedVal, setSelectVal] = useState("");
  function handleOptionChange(event) {
    setSelectVal(event.target.value);
  }
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
      <div>
        <RadioAdSelect
          id={"jiisr"}
          value={"shyam sundar md street patrpur"}
          onChangeSelect={handleOptionChange}
        />
        <RadioAdSelect
          id={"jiitsr"}
          value={"shyam sundar md street patrpur"}
          onChangeSelect={handleOptionChange}
        />
        <RadioAdSelect
          id={"jitisr"}
          value={"shyam sundar md street patrpur"}
          onChangeSelect={handleOptionChange}
        />
      </div>

      <button
        className={`w-full flex justify-center items-center p-2 bg-orange-600 cursor-pointer text-white disabled:bg-gray-400 disabled:cursor-not-allowed `}
        disabled={selectedVal ? false : true}
      >
        Continue...
      </button>
    </main>
  );
};

export default ChAdress;
