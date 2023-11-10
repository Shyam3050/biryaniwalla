import { useEffect, useState } from "react";

const useRestroMenu = () => {
  async function fetchRestro() {
    const data = await fetch("https://tiggy.vercel.app/api/restaurents");
    const json = await data.json();
    setRestroList(json);
  }
  const [restroLIst, setRestroList] = useState([]);
  useEffect(() => {
    fetchRestro();
  }, []);
  return restroLIst;
};
export default useRestroMenu;
