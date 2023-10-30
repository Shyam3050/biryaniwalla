import { useEffect, useState } from "react";
import RestroCard from "./RestroCard";

const RestaurentsList = () => {
  const [restroList, setRestroList] = useState([]);
  console.log(restroList);
  useEffect(() => {
    fetch("https://tiggy.vercel.app/api/restaurents")
      .then((data) => data.json())
      .then((data) => setRestroList(data));
  }, []);
  return (
    <section>
      <h2 className="text-2xl font-bold py-4">
        Restaurants with online food delivery in Bangalore
      </h2>
      <div className="my-6 restrolist">
        {restroList.length !== 0
          ? restroList.data.map((item) => <RestroCard key={item.info.id} data = {item.info}/>)
          : "loading....."}
      </div>
    </section>
  );
};

export default RestaurentsList;
