import Idly from "../../assets/category/Idli.webp";
import Bath from "../../assets/category/Bath.webp";
import Dosa from "../../assets/category/Dosa.webp";
import Khichdi from "../../assets/category/Khichdi.webp";
import Omelette from "../../assets/category/Omelette.webp";
import Paratha from "../../assets/category/Paratha.webp";
import Parotta from "../../assets/category/Parotta.webp";
import Pure_Veg from "../../assets/category/Pure_Veg.webp";
import Upma from "../../assets/category/Upma.webp";
import Uttapam from "../../assets/category/Uttapam.webp";
import Vada from "../../assets/category/Vada.webp";

const CategorySwiper = ({ id }) => {
  const category = [
    Idly,
    Bath,
    Dosa,
    Khichdi,
    Omelette,
    Paratha,

    Parotta,
    Upma,
    Pure_Veg,
    Uttapam,
    Vada,
  ];
  return (
    <>
      <div
        id={id}
        className="_image_grid flex overflow-x-scroll overflow-y-hidden scroll-smooth "
      >
        {category.map((item) => (
          <div
            key={item}
            className={`img_container h-[11.25rem] w-[9rem] min-w-[9rem]`}
          >
            <img src={item} alt="" className="w-full h-full" loading="lazy" />
          </div>
        ))}
      </div>
    </>
  );
};

export default CategorySwiper;
