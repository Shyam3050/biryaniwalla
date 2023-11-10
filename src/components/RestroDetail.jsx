import { useState } from "react";
import ReciepeSection from "./ReciepeSection";

const RestroDetail = () => {
  const [showCard, setShowCard] = useState(0);
  const receipes = [
    "Fried Chicken & Wings (3)",
    "Burgers & Wraps (3)  ",
    "Fries & Sides (7)",
  ];
  return (
    <main className="my-24 w-[95%] md:w-[60%]  max-w-5xl mx-auto  -z-10">
      <div className="RestaurantHeader_container pt-4 mb-5 flex justify-between">
        <div>
          <p className="text-xl font-bold ">Hotel Niagara - Since 1969</p>
          <p className="text-sm text-gray-600">Biryani, Kebabs</p>
          <p className="text-sm text-gray-600">Chaderghat 1.2 km ▾</p>
        </div>
        <div>
          <div className="rating_button w-[67px] h-[70px] border p-1 text-center">
            <span className="text-base font-bold text-green-600 pb-2 block ">
              3.8
            </span>
            <hr />
            <span className="text-[10px] text-gray-800 font-semibold">
              10k+ ratings
            </span>
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-600 pb-4">
        1.2 kms | ₹25 Delivery fee will apply
      </p>
      <hr />
      <ul className="font-extrabold my-3">
        <li className="inline-block mr-4">14 MINS</li>
        <li className="inline-block">₹450 for two</li>
      </ul>
      {/* <ReciepeCard/>
      <ReciepeCard/>
      <ReciepeCard/>
      <ReciepeCard/> */}
      <div className="bg-gray-200">
        {receipes.map((item, i) => (
          <ReciepeSection
            key={item}
            item={item}
            showCard={showCard === i ? true : false}
            setShowCard={() => setShowCard(i)}
          />
        ))}
      </div>
    </main>
  );
};

export default RestroDetail;
