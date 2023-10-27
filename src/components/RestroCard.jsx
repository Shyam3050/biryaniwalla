import { AiFillStar } from "react-icons/ai";
import kfc6 from "../assets/toprestro/kfc.webp";

const RestroCard = () => {
  return (
    <div className="w-[200px] h-[240px] border">
      <div className="w-full h-[135px] rounded-2xl overflow-hidden">
        <img src={kfc6} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="mt-2">
        <p className="font-bold text-xl ">Scoops Ice Cream</p>
        <p className="flex items-center font-semibold text-lg-">
          <span>
            <AiFillStar className="text-green-700" />
          </span>
          4.5
        </p>
        <p className="text-gray-600 text-sm">Ice Cream, Desserts</p>
        <p className="text-gray-600">Koti</p>
      </div>
    </div>
  );
};

export default RestroCard;
