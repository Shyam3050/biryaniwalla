import Header from "./components/Header";
import RestaurentsList from "./components/RestaurentsList";
import Swiper from "./components/UI/Swiper";

function App() {
  return (
    <>
      <Header />
      <main className="my-24 w-[95%]  max-w-5xl mx-auto  -z-10">
        <Swiper id="offerSwiper" />
        <Swiper id="categorySwiper" />
        <Swiper id="topRestro" />
        <hr/>
        <RestaurentsList/>
      </main>
    </>
  );
}

export default App;
