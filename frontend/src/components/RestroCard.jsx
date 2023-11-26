import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const RestroCard = ({ data }) => {
  console.log(data);
  return (
    <Link to={`/restaurants/${data.id}`}>
      <div className="w-[200px] h-[300px] border rounded-2xl ">
        <div className="w-full h-[135px] rounded-2xl overflow-hidden">
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${data.cloudinaryImageId}`}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-2 p-2">
          <p className="font-bold text-xl overflow-hidden whitespace-nowrap text-ellipsis ">
            {data.name}
          </p>
          <p className="flex items-center font-semibold text-lg-">
            <span>
              <AiFillStar className="text-green-700" />
            </span>
            {data.avgRatingString}
          </p>
          <p className="text-gray-600 text-sm">{data.cuisines.join(", ")}</p>
          <p className="text-gray-600">{data.locality}</p>
        </div>
      </div>
    </Link>
  );
};

export default RestroCard;
