const ReciepeCard = () => {
  return (
    <div>
      <div className="flex justify-between bg-white">
        <div>
          <p className="text-xs">Bestseller</p>
          <p className="text-base font-semibold">Kichdi Khata Kheema</p>
          <p className="text-sm text-gray-600">₹180</p>
        </div>
        <div className="w-[118px] h-[120px] relative">
          <div className=" w-full h-[96px] rounded-md overflow-hidden">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/bf5b64af4edefe994eecf2bdb32c3b3c"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <button
            type="button"
            className="absolute border w-[96px] h-[36px] mx-auto left-2/4 bottom-3 -translate-x-2/4 bg-white  rounded-md "
          >
            ADD
          </button>
        </div>
      </div>
      <hr className="pt-4 pb-6 bg-white" />
    </div>
  );
};

export default ReciepeCard;
