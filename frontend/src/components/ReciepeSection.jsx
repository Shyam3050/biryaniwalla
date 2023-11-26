import ReciepeCard from "./ReciepeCard";

const ReciepeSection = ({ item, showCard, setShowCard }) => {
  return (
    <section>
      <div
        className="flex justify-between  py-2 pr-4 items-center mt-2 bg-white cursor-pointer "
        onClick={() => setShowCard()}
      >
        <p>{item}</p>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 1024 1024"
          className={`inline ml-2 text-orange-500 ${
            showCard ? "rotate-180" : ""
          } `}
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
        </svg>
      </div>

      {showCard ? (
        <div>
          <ReciepeCard />
          <ReciepeCard />
        </div>
      ) : (
        ""
      )}
      <hr />
    </section>
  );
};
export default ReciepeSection;
