import RestroCard from "./RestroCard";

const RestaurentsList = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold py-4">
        Restaurants with online food delivery in Bangalore
      </h2>
      <div className="my-6 restrolist">
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
      </div>
    </section>
  );
};

export default RestaurentsList;
