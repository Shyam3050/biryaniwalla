import SwiggyLogo from "../assets/swiggy.svg";
import { AiOutlineDown, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { BiSolidOffer, BiHelpCircle, BiCartAlt } from "react-icons/bi";
import BottomNav from "./BottomNav";

const Header = () => {
  const navMenu = [
    {
      name: "Search",
      icn: <AiOutlineSearch className="inline text-2xl" />,
    },
    {
      name: "Offer",
      icn: <BiSolidOffer className="inline text-2xl" />,
    },
    {
      name: "Help",
      icn: <BiHelpCircle className="inline text-2xl" />,
    },
    {
      name: "SignIn",
      icn: <AiOutlineUser className="inline text-2xl" />,
    },
    {
      name: "Cart",
      icn: <BiCartAlt className="inline text-2xl" />,
    },
  ];
  return (
    <div>
      <nav className="fixed top-0 inset-x-0 h-20  shadow-lg z-50 bg-white">
        <div className=" h-full  flex justify-between items-center mx-8">
          <div className="flex items-center ">
            <a href="" className="block h-12 w-9 mr-8">
              <img
                srcSet={SwiggyLogo}
                alt="swiggy logo"
                className="w-full h-full "
              />
            </a>
            <div className="relative flex items-center ">
              <span className="_other_ mr-2 font-bold">Other</span>
              <span className="text-sm text-gray-600">Hyderbad, Telengana, Bharat</span>
              <span>
                <AiOutlineDown className="inline ml-2 text-orange-500" />
              </span>
            </div>
          </div>

          <ul className="flex gap-9">
            {navMenu.map((navItem) => (
              <li
                className=" flex items-center _gap_ hover:cursor-pointer"
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
