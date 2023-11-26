import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import OfferSwiper from "./OfferSwiper";
import CategorySwiper from "./CategorySwiper";
import TopRestro from "./TopRestro";

// eslint-disable-next-line react/prop-types
const Swiper = ({ id }) => {
  console.log(id);
  function scrollBtn(dir) {
    const sliderID = document.getElementById(id);
    if (dir === "left") {
      sliderID.scrollLeft -= 300;
    } else if (dir === "right") {
      sliderID.scrollLeft += 400;
    }
  }

  return (
    <section className="my-8">
      <div className="flex justify-between mb-4 ">
        <p className="text-2xl font-bold">Best offers for you</p>
        <div className="_swiper_btn_container">
          <button className="_swiper_arrow" onClick={() => scrollBtn("left")}>
            <AiOutlineArrowLeft />
          </button>
          <button className="_swiper_arrow" onClick={() => scrollBtn("right")}>
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>

      {id === "offerSwiper" ? <OfferSwiper id={id} /> : ""}
      {id === "categorySwiper" ? <CategorySwiper id={id} /> : ""}
      {id === "topRestro" ? <TopRestro id={id} /> : ""}
    </section>
  );
};
export default Swiper;
