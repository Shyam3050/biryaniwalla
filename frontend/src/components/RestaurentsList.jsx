import RestroCard from "./RestroCard";
import useRestroMenu from "../hooks/useRestoMenu";

const RestaurentsList = () => {
  const restroList = useRestroMenu();

  return (
    <section>
      <h2 className="text-2xl font-bold py-4">
        Restaurants with online food delivery in Bangalore
      </h2>
      <div className="my-6 restrolist">
        {restroList.length !== 0
          ? restroList.data.map((item) => (
              <RestroCard key={item.info.id} data={item.info} />
            ))
          : "loading....."}
      </div>
    </section>
  );
};

export default RestaurentsList;
