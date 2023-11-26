import RestaurentsList from "./RestaurentsList";
import Swiper from "./UI/Swiper";

const Body = () => {
  return (
    <main className="my-24 w-[95%]  max-w-5xl mx-auto  -z-10">
      <Swiper id="offerSwiper" />
      <Swiper id="categorySwiper" />
      <Swiper id="topRestro" />
      <hr />
      <RestaurentsList />
    </main>
  );
};

export default Body;
