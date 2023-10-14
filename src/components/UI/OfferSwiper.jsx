import biryani from "../../assets/bestoffer/biryani.webp";
import bowl from "../../assets/bestoffer/bowl.webp";
import burger from "../../assets/bestoffer/burger.webp";
import kfc from "../../assets/bestoffer/kfc.webp";
import plater from "../../assets/bestoffer/plater.webp";

const OfferSwiper = ({ id }) => {
  const offer_list = [biryani, bowl, burger, kfc, plater];
  return (
    <div
      id={id}
      className="_image_grid flex overflow-x-scroll overflow-y-hidden scroll-smooth "
    >
      {offer_list.map((item) => (
        <div
          key={item}
          className={`img_container h-64 w-[26.5rem] min-w-[26.5rem]`}
        >
          <img src={item} alt="" className="w-full h-full" />
        </div>
      ))}
    </div>
  );
};

export default OfferSwiper;
