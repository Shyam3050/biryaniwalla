import kfc from "../../assets/toprestro/kfc.webp";
import kfc1 from "../../assets/toprestro/kfc.webp";
import kfc2 from "../../assets/toprestro/kfc.webp";
import kfc3 from "../../assets/toprestro/kfc.webp";
import kfc4 from "../../assets/toprestro/kfc.webp";
import kfc5 from "../../assets/toprestro/kfc.webp";
import kfc6 from "../../assets/toprestro/kfc.webp";

import { AiFillStar } from "react-icons/ai";
// eslint-disable-next-line react/prop-types
const TopRestro = ({ id }) => {
  const topResList = [kfc, kfc1, kfc2, kfc3, kfc4, kfc6, kfc5];

  return (
    <div
      id={id}
      className="_image_grid flex overflow-x-scroll overflow-y-hidden scroll-smooth "
    >
      {topResList.map((item) => (
        <div
          key={item}
          className={`img_container h-[19rem] w-[17rem] min-w-[17rem]`}
        >
          <div className="h-[11.375rem] w-full">
            <img src={item} alt="" className="w-full h-full" />
          </div>
          <div className="mt-2">
            <p className="font-bold text-xl ">Scoops Ice Cream</p>
            <p className="flex items-center font-semibold text-lg-">
            
              <span>
                <AiFillStar className="text-green-700"/>
              </span>
              4.5
            </p>
            <p className="text-gray-600">Ice Cream, Desserts</p>
            <p className="text-gray-600">Koti</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default TopRestro;
