import SwiggyLogo from "../assets/swiggy.svg";
import { AiOutlineDown, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { BiSolidOffer, BiCartAlt } from "react-icons/bi";
import BottomNav from "./BottomNav";

const Header = () => {
  const navMenu = [
    {
      name: "Search",
      icn: <AiOutlineSearch className="inline text-2xl" />,
      smHidden: true,
    },
    {
      name: "Offer",
      icn: <BiSolidOffer className="inline text-2xl" />,
      smHidden: false,
    },
    {
      name: "Cart",
      icn: <BiCartAlt className="inline text-2xl" />,
      smHidden: true,
    },
    {
      name: "SignIn",
      icn: <AiOutlineUser className="inline text-2xl" />,
      smHidden: true,
    },
  ];
  return (
    <div>
      <nav className="fixed top-0 inset-x-0 h-20  shadow-lg z-50 bg-white">
        <div className=" h-full  flex justify-between items-center mx-2 md:mx-8">
          <div className="flex items-center ">
            <a href="" className="block h-12 w-9 mr-2 md:mr-8">
              <img
                srcSet={SwiggyLogo}
                alt="swiggy logo"
                className="w-full h-full "
              />
            </a>
            <div className="relative flex items-center ">
              <span className="_other_ mr-2 font-bold">Other</span>
              <span className="w-[100px] md:w-[176px] text-sm text-gray-600 overflow-hidden text-ellipsis whitespace-nowrap">
                Hyderbad, Telengana, Bharat
              </span>
              <span>
                <AiOutlineDown className="inline ml-2 text-orange-500" />
              </span>
            </div>
          </div>

          <ul className="flex gap-9">
            {navMenu.map((navItem) => (
              <li
                className={`flex items-center _gap_ hover:cursor-pointer ${navItem.smHidden ? "hidden md:flex" : ""}`}
                key={navItem.name}
              >
                {navItem.icn}
                <p className="text-base font-semibold ">{navItem.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <BottomNav />
    </div>
  );
};
export default Header;
